// HTTP-checks every Professor Messer video URL in index.html's exam banks.
// Usage: node tools/linkcheck.js
const fs = require('fs');
const path = require('path').join(__dirname, '..', 'index.html');
const html = fs.readFileSync(path, 'utf8');
const m = html.match(/<script>([\s\S]*)<\/script>/);
if (!m) { console.error('no <script> found'); process.exit(1); }

// stub browser globals (same approach as validate.js)
const fakeEl = new Proxy({}, {
  get(t, p) {
    if (p === 'classList') return { add(){}, remove(){}, toggle(){} };
    if (p === 'style') return {};
    if (p === 'dataset') return { v: '0' };
    if (p === 'querySelectorAll') return () => [];
    if (p === 'querySelector') return () => fakeEl;
    if (typeof p === 'string') return (typeof t[p] === 'function') ? t[p] : (t[p] ?? function(){});
    return undefined;
  },
  set(t, p, v) { t[p] = v; return true; }
});
global.document = { getElementById: () => fakeEl, querySelectorAll: () => [], querySelector: () => fakeEl };
global.window = { scrollTo(){} };
global.localStorage = { getItem: () => null, setItem(){}, removeItem(){} };
global.setInterval = () => 0; global.clearInterval = () => {};
global.confirm = () => true; global.alert = () => {};

let src = m[1] + '\n;globalThis.__EXAMS = EXAMS;';
(0, eval)(src);
const EX = globalThis.__EXAMS;

const urls = new Map(); // url -> "examId/topicKey"
for (const id of Object.keys(EX)) {
  for (const [k, v] of Object.entries(EX[id].videos)) {
    if (!urls.has(v.u)) urls.set(v.u, `${id}/${k}`);
  }
}
console.log(`Checking ${urls.size} unique video URLs...`);

const entries = [...urls.entries()];
const CONCURRENCY = 4;
let bad = [], done = 0;

async function checkOne(url, label) {
  for (let attempt = 1; attempt <= 2; attempt++) {
    try {
      const res = await fetch(url, { method: 'GET', redirect: 'follow',
        headers: { 'User-Agent': 'Mozilla/5.0 (linkcheck; practice-exam-app)' } });
      // read a little of the body to confirm it's a real page, then discard
      const text = await res.text();
      const is404 = res.status === 404 || /page not found|error 404/i.test(text.slice(0, 2000));
      if (res.ok && !is404) return { ok: true };
      if (attempt === 2) return { ok: false, why: `HTTP ${res.status}${is404 ? ' (404 content)' : ''}` };
    } catch (e) {
      if (attempt === 2) return { ok: false, why: e.message };
    }
    await new Promise(r => setTimeout(r, 1500));
  }
}

(async () => {
  let idx = 0;
  async function worker() {
    while (idx < entries.length) {
      const [url, label] = entries[idx++];
      const r = await checkOne(url, label);
      done++;
      if (!r.ok) { bad.push({ url, label, why: r.why }); console.log(`  FAIL ${label}: ${r.why}\n       ${url}`); }
      if (done % 25 === 0) console.log(`  ...${done}/${entries.length}`);
    }
  }
  await Promise.all(Array.from({ length: CONCURRENCY }, worker));
  console.log(`\nChecked ${done}. Failures: ${bad.length}`);
  if (bad.length) { bad.forEach(b => console.log(`  ${b.label} -> ${b.url} (${b.why})`)); process.exit(1); }
  console.log('ALL LINKS OK');
})();
