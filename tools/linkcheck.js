// HTTP-checks every Professor Messer video URL in the v2 data modules (src/data/*.ts).
// Usage: node tools/linkcheck.js
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
const __dirname = path.dirname(fileURLToPath(import.meta.url));

const dataDir = path.join(__dirname, '..', 'src', 'data');
const examFiles = fs.readdirSync(dataDir).filter((f) => /^(220-|n10-)/.test(f) && f.endsWith('.ts'));

const urls = new Map(); // url -> "examId/topicKey"
for (const file of examFiles) {
  const src = fs.readFileSync(path.join(dataDir, file), 'utf8');
  // data modules are `export const exam: ExamDef = { ...json... }` with a JSON.stringify body
  const marker = 'export const exam: ExamDef = ';
  const start = src.indexOf(marker);
  if (start === -1) { console.error(`no exam marker in ${file}`); process.exit(1); }
  const exam = JSON.parse(src.slice(start + marker.length).trim());
  for (const [k, v] of Object.entries(exam.videos)) {
    if (!urls.has(v.u)) urls.set(v.u, `${exam.id}/${k}`);
  }
}
console.log(`Checking ${urls.size} unique video URLs...`);

const entries = [...urls.entries()];
const CONCURRENCY = 4;
let bad = [], done = 0;

async function checkOne(url) {
  for (let attempt = 1; attempt <= 2; attempt++) {
    try {
      const res = await fetch(url, { method: 'GET', redirect: 'follow',
        headers: { 'User-Agent': 'Mozilla/5.0 (linkcheck; practice-exam-app)' } });
      const text = await res.text();
      const is404 = res.status === 404 || /page not found|error 404/i.test(text.slice(0, 2000));
      if (res.ok && !is404) return { ok: true };
      if (attempt === 2) return { ok: false, why: `HTTP ${res.status}${is404 ? ' (404 content)' : ''}` };
    } catch (e) {
      if (attempt === 2) return { ok: false, why: e.message };
    }
    await new Promise((r) => setTimeout(r, 1500));
  }
}

(async () => {
  let idx = 0;
  async function worker() {
    while (idx < entries.length) {
      const [url, label] = entries[idx++];
      const r = await checkOne(url);
      done++;
      if (!r.ok) { bad.push({ url, label, why: r.why }); console.log(`  FAIL ${label}: ${r.why}\n       ${url}`); }
      if (done % 50 === 0) console.log(`  ...${done}/${entries.length}`);
    }
  }
  await Promise.all(Array.from({ length: CONCURRENCY }, worker));
  console.log(`\nChecked ${done}. Failures: ${bad.length}`);
  if (bad.length) { bad.forEach((b) => console.log(`  ${b.label} -> ${b.url} (${b.why})`)); process.exit(1); }
  console.log('ALL LINKS OK');
})();
