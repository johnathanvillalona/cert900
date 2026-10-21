import assert from 'node:assert/strict';
import { mkdtempSync, mkdirSync, writeFileSync, readFileSync, readdirSync } from 'node:fs';
import { tmpdir } from 'node:os';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { randomBytes } from 'node:crypto';
import { spawn, spawnSync } from 'node:child_process';
import net from 'node:net';

// Never load the project's Wrangler configuration, inherited credentials or env files.
const repo = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');
const self = fileURLToPath(import.meta.url);
if (process.argv[2] !== '--isolated-child') {
  const root = mkdtempSync(path.join(tmpdir(), 'cert900-integration-'));
  for (const dir of ['home', 'config', 'cache', 'state', 'logs', 'registry']) mkdirSync(path.join(root, dir));
  const childEnv = {
    PATH: `${path.dirname(process.execPath)}:/usr/bin:/bin`,
    HOME: path.join(root, 'home'),
    XDG_CONFIG_HOME: path.join(root, 'config'),
    XDG_CACHE_HOME: path.join(root, 'cache'),
    TMPDIR: root,
    WRANGLER_LOG_PATH: path.join(root, 'logs'),
    WRANGLER_REGISTRY_PATH: path.join(root, 'registry'),
    WRANGLER_SEND_METRICS: 'false',
    CLOUDFLARE_LOAD_DEV_VARS_FROM_DOT_ENV: 'false',
    CLOUDFLARE_INCLUDE_PROCESS_ENV: 'false',
    CI: 'true', NO_COLOR: '1', BROWSER: 'false', TZ: 'UTC',
  };
  const logPath = path.join(root, 'runner.log');
  const child = spawn(process.execPath, [self, '--isolated-child', root,
    ...process.argv.slice(2)], { cwd: root, env: childEnv, stdio: ['ignore', 'pipe', 'pipe'] });
  let logs = '';
  let announced = false;
  for (const stream of [child.stdout, child.stderr]) stream.on('data', chunk => {
    logs += chunk;
    // Forward only the safe loopback readiness line, never raw Worker logs.
    const ready = logs.match(/^Isolated preview: http:\/\/127\.0\.0\.1:\d+$/m);
    if (ready && !announced) { announced = true; console.log(ready[0]); }
  });
  for (const signal of ['SIGINT', 'SIGTERM']) process.once(signal, () => child.kill(signal));
  const timer = process.argv.includes('--serve') ? null : setTimeout(() => child.kill('SIGTERM'), 180000);
  const status = await new Promise(resolve => child.once('exit', code => resolve(code)));
  if (timer) clearTimeout(timer);
  writeFileSync(logPath, logs, { mode: 0o600 });
  console.log(`Isolated test directory: ${root}`);
  try { console.log(readFileSync(path.join(root, 'report.json'), 'utf8')); }
  catch { console.log('No completed report; raw logs retained locally, not printed.'); }
  process.exitCode = status ?? 1;
} else {
  const root = process.argv[3];
  const checks = [];
  const report = { checks, completed: false };
  let worker;
  const record = name => { checks.push({ name, passed: true }); console.log(`PASS ${name}`); };
  const save = () => writeFileSync(path.join(root, 'report.json'), JSON.stringify(report, null, 2));
  const emptyEnv = path.join(root, 'empty.env');
  writeFileSync(emptyEnv, '', { mode: 0o600 });
  const server = net.createServer();
  await new Promise((resolve, reject) => server.once('error', reject).listen(0, '127.0.0.1', resolve));
  const portArg = process.argv.find(a => a.startsWith('--port='));
  const port = server.address().port;
  const previewPort = portArg ? Number(portArg.split('=')[1]) : port;
  assert(Number.isInteger(previewPort) && previewPort > 0 && previewPort < 65536);
  await new Promise(resolve => server.close(resolve));
  const configPath = path.join(root, 'wrangler.json');
  const config = {
    name: 'cert900-isolated-security-smoke',
    main: path.join(repo, 'worker/index.ts'),
    compatibility_date: '2026-07-14',
    compatibility_flags: ['nodejs_compat'],
    workers_dev: false,
    assets: { directory: path.join(repo, 'dist'), binding: 'ASSETS', not_found_handling: 'single-page-application', run_worker_first: true },
    d1_databases: [{ binding: 'DB', database_name: 'cert900-security-smoke', database_id: '11111111-1111-4111-8111-111111111111', remote: false }],
    vars: { BETTER_AUTH_SECRET: randomBytes(48).toString('hex'), BETTER_AUTH_URL: `http://localhost:${port}` },
  };
  writeFileSync(configPath, JSON.stringify(config), { mode: 0o600 });
  const state = path.join(root, 'state');
  function d1(args) {
    const out = spawnSync(process.execPath, [path.join(repo, 'node_modules/wrangler/bin/wrangler.js'), 'd1', 'execute', 'DB', '--local', '--config', configPath, '--persist-to', state, '--env-file', emptyEnv, '--json', ...args], {
      cwd: root, env: process.env, encoding: 'utf8', timeout: 45000, maxBuffer: 2000000,
    });
    if (out.status !== 0) {
      writeFileSync(path.join(root, 'd1-failure.log'), `${out.stdout}\n${out.stderr}`, { mode: 0o600 });
      throw new Error(`Isolated D1 command failed (exit ${out.status}); raw log retained locally`);
    }
    return JSON.parse(out.stdout);
  }
  try {
    d1(['--file', path.join(repo, 'worker/schema.sql')]);
    record('fresh local D1 initialized from tracked schema via Wrangler --local');
    const wrangler = await import(pathToFileURL(path.join(repo, 'node_modules/wrangler/wrangler-dist/cli.js')).href);
    const { MockAgent, setGlobalDispatcher } = await import(pathToFileURL(path.join(repo, 'node_modules/undici/index.js')).href);
    const mock = new MockAgent();
    mock.disableNetConnect();
    mock.enableNetConnect(host => /^(?:127\.0\.0\.1|localhost|\[::1\])(?::\d+)?$/.test(host));
    setGlobalDispatcher(mock);
    let outboundAttempts = 0;
    const denyOutbound = () => { outboundAttempts++; return new Response('External network disabled by isolated test harness', { status: 503 }); };
    const options = {
      config: configPath, envFiles: [emptyEnv],
      dev: {
        remote: false, server: { hostname: '127.0.0.1', port, secure: false },
        inspector: false, watch: false, liveReload: false, testScheduled: false,
        persist: state, logLevel: 'none', registry: undefined,
        inferOriginFromRoutes: false, outboundService: denyOutbound,
        auth: async () => { throw new Error('Remote authentication disabled in isolated test'); },
      },
    };
    async function start() {
      worker = await wrangler.unstable_startWorker(options);
      await worker.ready;
      assert.equal(worker.config.dev.remote, false);
      assert.equal(worker.config.dev.outboundService, denyOutbound);
      assert.equal(worker.config.dev.testScheduled, false);
      const url = await worker.url;
      assert.equal(url.hostname, '127.0.0.1');
      assert.equal(Number(url.port), options.dev.server.port);
      return url.origin;
    }
    let origin = await start();
    record('Wrangler starts actual unmodified Worker on localhost with outbound requests blocked');
    const cookies = new Map();
    async function req(route, { method = 'GET', body, auth = false, raw = false, cookieOverride } = {}) {
      // OAuth and scheduled/social endpoints are never invoked in this test.
      assert(!/sign-in\/social|callback|__scheduled/.test(route));
      const headers = { Origin: 'http://localhost:5173' };
      if (body !== undefined) headers['content-type'] = 'application/json';
      if (auth) headers.cookie = [...cookies].map(([k, v]) => `${k}=${v}`).join('; ');
      if (cookieOverride) headers.cookie = cookieOverride;
      const response = await fetch(origin + route, { method, headers, body: body === undefined ? undefined : raw ? body : JSON.stringify(body), redirect: 'manual', signal: AbortSignal.timeout(15000) });
      for (const value of response.headers.getSetCookie()) {
        const pair = value.split(';')[0];
        const split = pair.indexOf('=');
        const key = pair.slice(0, split), val = pair.slice(split + 1);
        if (!val || /max-age=0(?:;|$)/i.test(value)) cookies.delete(key);
        else cookies.set(key, val);
      }
      const text = await response.text();
      let data;
      try { data = JSON.parse(text); } catch { data = null; }
      return { response, text, data };
    }
    let result = await req('/');
    assert.equal(result.response.status, 200);
    assert(result.response.headers.get('content-type').includes('text/html'));
    assert(result.response.headers.has('content-security-policy'));
    const css = readdirSync(path.join(repo, 'dist/assets')).find(n => /^index-.*\.css$/.test(n));
    result = await req('/assets/' + css);
    assert.equal(result.response.status, 200);
    assert(result.response.headers.get('content-type').includes('text/css'));
    assert.equal(result.text, readFileSync(path.join(repo, 'dist/assets', css), 'utf8'));
    assert(result.response.headers.get('cache-control').includes('immutable'));
    result = await req('/licenses/shadcn-MIT.txt');
    assert.equal(result.response.status, 200);
    assert.equal(result.text, readFileSync(path.join(repo, 'public/licenses/shadcn-MIT.txt'), 'utf8'));
    result = await req('/ads.txt');
    assert.equal(result.response.status, 200);
    assert.match(result.response.headers.get('content-type'), /^text\/plain(?:;|$)/);
    assert.equal(result.text, readFileSync(path.join(repo, 'public/ads.txt'), 'utf8'));
    result = await req('/ads.txt', { method: 'HEAD' });
    assert.equal(result.response.status, 200);
    assert.match(result.response.headers.get('content-type'), /^text\/plain(?:;|$)/);
    assert.equal(result.text, '');
    // Direct dispatch stays inside the local runtime; no public DNS or traffic.
    for (const method of ['GET', 'HEAD']) {
      const canonical = await worker.fetch('https://cert900.com/ads.txt', { method, redirect: 'manual' });
      assert.equal(canonical.status, 200);
      assert.match(canonical.headers.get('content-type'), /^text\/plain(?:;|$)/);
      assert.equal(await canonical.text(), method === 'GET' ? readFileSync(path.join(repo, 'public/ads.txt'), 'utf8') : '');
      const www = await worker.fetch('https://www.cert900.com/ads.txt', { method, redirect: 'manual' });
      assert.equal(www.status, 301);
      assert.equal(www.headers.get('location'), 'https://cert900.com/ads.txt');
    }
    record('HTML, security headers, compiled CSS, immutable caching, MIT license, and verified ads.txt served');
    result = await req('/api/config');
    assert.equal(result.response.status, 200);
    assert.deepEqual(result.data, { emailAuth: false, newsletter: false });
    assert.equal(result.response.headers.get('cache-control'), 'public, max-age=300');
    record('/api/config reports email/newsletter integrations disabled');
    result = await req('/api/security-smoke-unknown');
    assert.equal(result.response.status, 404);
    assert.deepEqual(result.data, { error: 'not found' });
    result = await req('/api/report'); assert.equal(result.response.status, 405);
    result = await req('/api/report', { method: 'POST', body: '{invalid', raw: true }); assert.equal(result.response.status, 400);
    result = await req('/api/report', { method: 'POST', body: { examId: '__auth', ref: 'q:1' } }); assert.equal(result.response.status, 400);
    result = await req('/api/progress'); assert.equal(result.response.status, 401);
    result = await req('/api/newsletter/subscribe', { method: 'POST', body: { email: 'nobody@example.invalid' } }); assert.equal(result.response.status, 503);
    result = await req('/security-smoke-unknown-page'); assert.equal(result.response.status, 404); assert.equal(result.response.headers.get('x-robots-tag'), 'noindex');
    record('representative API 400/401/404/405/503 responses and unknown-page soft-404 handling');
    result = await req('/api/auth/get-session'); assert.equal(result.response.status, 200); assert.equal(result.data, null);
    const email = 'security-smoke@example.invalid';
    const password = randomBytes(24).toString('hex');
    result = await req('/api/auth/sign-up/email', { method: 'POST', body: { name: 'Isolated security test', email, password } });
    assert.equal(result.response.status, 200, 'synthetic signup status');
    assert.equal(result.data.user.email, email);
    assert([...cookies.keys()].some(k => k.includes('session_token')));
    result = await req('/api/auth/get-session', { auth: true }); assert.equal(result.response.status, 200); assert.equal(result.data.user.email, email);
    result = await req('/api/auth/get-session?disableCookieCache=true', { auth: true }); assert.equal(result.response.status, 200); assert.equal(result.data.user.email, email);
    record('synthetic local signup, session cookie issuance, and authenticated session read');
    result = await req('/api/progress', { auth: true, method: 'PUT', body: '{invalid', raw: true }); assert.equal(result.response.status, 400);
    const data = { topics: { 'security-smoke': { seen: 1 } }, exams: [] };
    result = await req('/api/progress', { auth: true, method: 'PUT', body: { examId: '220-1201', data, updatedAt: 123456789 } }); assert.equal(result.response.status, 200);
    result = await req('/api/progress', { auth: true }); assert.equal(result.response.status, 200); assert.deepEqual(result.data['220-1201'], { data, updatedAt: 123456789 });
    record('authenticated application API writes and reads fresh local D1 data');
    await worker.dispose(); worker = undefined;
    record('first Worker fully stopped');
    const counts = d1(['--command', 'SELECT (SELECT count(*) FROM "user") AS users, (SELECT count(*) FROM session) AS sessions, (SELECT count(*) FROM progress) AS progressRows;']);
    const row = counts[0].results[0];
    assert.equal(row.users, 1); assert(row.sessions >= 1); assert.equal(row.progressRows, 1);
    record('independent Wrangler D1 SQL read confirms persisted synthetic user, session, and progress rows');
    origin = await start();
    result = await req('/api/auth/get-session', { auth: true }); assert.equal(result.response.status, 200); assert.equal(result.data.user.email, email);
    result = await req('/api/auth/get-session?disableCookieCache=true', { auth: true }); assert.equal(result.response.status, 200); assert.equal(result.data.user.email, email);
    result = await req('/api/progress', { auth: true }); assert.equal(result.response.status, 200); assert.deepEqual(result.data['220-1201'], { data, updatedAt: 123456789 });
    record('Worker restart preserves session authentication and local D1 application data');
    result = await req('/api/progress', { auth: true, method: 'DELETE' }); assert.equal(result.response.status, 200);
    result = await req('/api/progress', { auth: true }); assert.deepEqual(result.data, {});
    const oldCookie = [...cookies].map(([k, v]) => `${k}=${v}`).join('; ');
    result = await req('/api/auth/sign-out', { auth: true, method: 'POST', body: {} }); assert.equal(result.response.status, 200);
    result = await req('/api/auth/get-session', { auth: true }); assert.equal(result.data, null);
    result = await req('/api/progress', { auth: true }); assert.equal(result.response.status, 401);
    result = await req('/api/auth/get-session?disableCookieCache=true', { cookieOverride: oldCookie }); assert.equal(result.data, null);
    record('local progress deletion, sign-out, and session invalidation');
    result = await req('/api/auth/sign-in/email', { method: 'POST', body: { email, password: randomBytes(24).toString('hex') } }); assert.equal(result.response.status, 401);
    result = await req('/api/auth/sign-in/email', { method: 'POST', body: { email, password } }); assert.equal(result.response.status, 200);
    record('synthetic wrong-password rejection and valid local password sign-in');
    assert(!Object.keys(config.vars).some(k => /GOOGLE|APPLE|RESEND|EMAIL|BSKY|REDDIT/.test(k)));
    assert(!config.triggers && !config.routes && !config.services);
    assert.equal(outboundAttempts, 0);
    record('no integration credentials, remote bindings, cron triggers, OAuth flows, or outbound Worker requests');
    report.completed = true;
    report.workerOutboundAttempts = outboundAttempts;
    if (process.argv.includes('--serve')) {
      // Expose the fixed browser-test port only after every smoke check passes.
      await worker.dispose();
      options.dev.server.port = previewPort;
      config.vars.BETTER_AUTH_URL = `http://localhost:${previewPort}`;
      writeFileSync(configPath, JSON.stringify(config), { mode: 0o600 });
      origin = await start();
      save();
      console.log(`Isolated preview: ${origin}`);
      writeFileSync(path.join(root, 'preview.json'), JSON.stringify({ url: origin, root }));
      await new Promise(resolve => {
        process.once('SIGTERM', resolve);
        process.once('SIGINT', resolve);
      });
    }
    await mock.close();
  } catch (e) {
    // Assertion messages can embed synthetic session tokens; never print them.
    report.failure = { name: e.name, code: e.code ?? null, location: e.stack?.split('\n').find(l => l.includes(self))?.trim() ?? null };
    process.exitCode = 1;
  } finally {
    if (worker) await worker.dispose();
    save();
  }
}
