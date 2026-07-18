// HTTP-checks every topic video URL in the v2 data modules (src/data/*.ts).
// Per-host strategy:
//   - professormesser.com: GET + 404-content sniff (their 404s can be HTTP 200)
//   - youtube.com: oEmbed lookup — returns 404 for dead/private/removed videos
//     while the watch page itself would still 200. Timestamps (&t=) are
//     stripped for the oEmbed probe; the target video is what matters.
// Usage: node tools/linkcheck.js
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
const __dirname = path.dirname(fileURLToPath(import.meta.url));

const dataDir = path.join(__dirname, '..', 'src', 'data');
const marker = 'export const exam: ExamDef = ';
const examFiles = fs
  .readdirSync(dataDir)
  .filter((f) => f.endsWith('.ts'))
  .filter((f) => fs.readFileSync(path.join(dataDir, f), 'utf8').includes(marker));

const urls = new Map(); // url -> "examId/topicKey"
for (const file of examFiles) {
  const src = fs.readFileSync(path.join(dataDir, file), 'utf8');
  const exam = JSON.parse(src.slice(src.indexOf(marker) + marker.length).trim());
  for (const [k, v] of Object.entries(exam.videos)) {
    if (!urls.has(v.u)) urls.set(v.u, `${exam.id}/${k}`);
  }
}
console.log(`Checking ${urls.size} unique video URLs across ${examFiles.length} exams...`);

const entries = [...urls.entries()];
const CONCURRENCY = 4;
let bad = [], done = 0;

function probeUrl(url) {
  const u = new URL(url);
  if (u.hostname.endsWith('youtube.com')) {
    // oEmbed 404s for dead videos; strip the timestamp for the probe
    u.searchParams.delete('t');
    return `https://www.youtube.com/oembed?format=json&url=${encodeURIComponent(u.toString())}`;
  }
  return url;
}

async function checkOne(url) {
  const target = probeUrl(url);
  for (let attempt = 1; attempt <= 2; attempt++) {
    try {
      const res = await fetch(target, { method: 'GET', redirect: 'follow',
        headers: { 'User-Agent': 'Mozilla/5.0 (linkcheck; practice-exam-app)' } });
      const text = await res.text();
      const is404 = res.status === 404 || (!target.includes('/oembed') && /page not found|error 404/i.test(text.slice(0, 2000)));
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
