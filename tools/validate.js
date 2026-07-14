const fs = require('fs');
const path = require('path').join(__dirname, '..', 'index.html');
const html = fs.readFileSync(path, 'utf8');
const m = html.match(/<script>([\s\S]*)<\/script>/);
if (!m) { console.error('no <script> found'); process.exit(1); }
let src = m[1];

// --- stub browser globals ---
const fakeEl = new Proxy({}, {
  get(t, p) {
    if (p === 'classList') return { add(){}, remove(){}, toggle(){} };
    if (p === 'style') return {};
    if (p === 'dataset') return { v: '0' };
    if (p === 'querySelectorAll' || p === 'querySelectorAll') return () => [];
    if (p === 'querySelector') return () => fakeEl;
    if (typeof p === 'string') return (typeof t[p] === 'function') ? t[p] : (t[p] ?? function(){});
    return undefined;
  },
  set(t, p, v) { t[p] = v; return true; }
});
global.document = {
  getElementById: () => fakeEl,
  querySelectorAll: () => [],
  querySelector: () => fakeEl,
};
global.window = { scrollTo(){} };
let store = {};
global.localStorage = { getItem: k => store[k] ?? null, setItem(k,v){store[k]=String(v);}, removeItem(k){delete store[k];} };
global.setInterval = () => 0;
global.clearInterval = () => {};
global.confirm = () => true;
global.alert = () => {};

// capture EXAMS + an engine driver after eval
src += `
;globalThis.__EXAMS = EXAMS;
globalThis.__drive = function(){
  const log = [];
  for (const id of Object.keys(EXAMS)) {
    setExam(id);
    const mc = pickExamMC(Math.min(A.examMC, QUESTIONS.length));
    const domsSeen = {}; mc.forEach(q=>domsSeen[q.d]=(domsSeen[q.d]||0)+1);
    log.push('['+id+'] pickExamMC -> '+mc.length+' items, domains '+JSON.stringify(domsSeen));
    // full exam: build session, answer everything correctly, score it
    startExam();
    S.items.forEach((it,i)=>{
      if(it.kind==='mc') S.answers[i]=it.q.a;
      else if(it.p.kind==='match') S.answers[i]=it.p.items.map(x=>x.a);
      else S.answers[i]=it.p.steps.map((_,k)=>k);
    });
    endExam(false);
    // after endExam, progressAll[id].exams holds the record
    const rec = progressAll[id].exams[progressAll[id].exams.length-1];
    log.push('['+id+'] all-correct exam scored '+rec.scaled+' ('+rec.pct+'%), pass='+(rec.scaled>=700));
    // progress screen render
    showProgress();
    log.push('['+id+'] showProgress rendered OK');
    // weak-focus practice pick
    setExam(id);
    const dmc = pickMC(10,{focusWeak:true,domain:0});
    log.push('['+id+'] pickMC(weak) -> '+dmc.length);
  }
  return log;
};
`;

try {
  (0, eval)(src);
} catch (e) {
  console.error('SCRIPT ERROR:', e.message);
  console.error(e.stack.split('\n').slice(0,3).join('\n'));
  process.exit(1);
}

const EX = globalThis.__EXAMS;
let allOK = true;
for (const id of Object.keys(EX)) {
  const ex = EX[id];
  // verify every question topic resolves in videos, answer index valid
  let badTopic = 0, badAns = 0;
  const domCount = {};
  for (const q of ex.questions) {
    if (!ex.videos[q.t]) badTopic++;
    if (typeof q.a !== 'number' || q.a < 0 || q.a >= q.o.length) badAns++;
    domCount[q.d] = (domCount[q.d]||0)+1;
  }
  // verify PBQ topics resolve, and match items reference valid choice indices
  let badPbq = 0;
  for (const p of ex.pbqs) {
    if (!ex.videos[p.t]) badPbq++;
    if (p.kind === 'match') for (const it of p.items) if (it.a < 0 || it.a >= p.choices.length) badPbq++;
  }
  // verify domains referenced by questions all exist in domains map
  let badDom = 0;
  for (const q of ex.questions) if (!ex.domains[q.d]) badDom++;
  const splitSum = Object.values(ex.examSplit).reduce((a,b)=>a+b,0);
  console.log(`\n=== ${ex.cert} ${ex.name} (${ex.code}) ===`);
  console.log(`  questions: ${ex.questions.length}  pbqs: ${ex.pbqs.length}  videos: ${Object.keys(ex.videos).length}  domains: ${Object.keys(ex.domains).length}`);
  console.log(`  per-domain question counts:`, domCount);
  console.log(`  examSplit sum: ${splitSum.toFixed(2)}  examMC:${ex.examMC} examPBQ:${ex.examPBQ} examMinutes:${ex.examMinutes}`);
  if (badTopic||badAns||badPbq||badDom) {
    allOK = false;
    console.log(`  !! ISSUES  badTopic=${badTopic} badAns=${badAns} badPbq=${badPbq} badDom=${badDom}`);
  } else {
    console.log(`  OK: all topics resolve, all answer indices valid, all PBQ choices valid.`);
  }
  // sample a couple of built video URLs
  const sampleKeys = Object.keys(ex.videos).slice(0,2);
  for (const k of sampleKeys) console.log(`  sample url: ${ex.videos[k].u}`);
}
console.log('\n--- engine runtime drive (select exam, pick, full-exam score, progress) ---');
try {
  const drvLog = globalThis.__drive();
  drvLog.forEach(l => console.log('  ' + l));
} catch (e) {
  allOK = false;
  console.error('  ENGINE DRIVE ERROR:', e.message);
  console.error('  ' + e.stack.split('\n').slice(1,3).join('\n  '));
}

console.log('\n' + (allOK ? 'ALL EXAMS VALID' : 'VALIDATION FAILED'));
process.exit(allOK ? 0 : 1);
