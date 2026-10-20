import{compileScenario}from'../../src/simulations/core/transition'
import{windowsFirewallDefinition,initialWindowsState}from'../../src/simulations/scenarios/windows-firewall'
import{analyzeWindows,emptyWindowsForm,validateWindowsRule}from'../../src/simulations/firewall/windows'
const runtime=compileScenario(windowsFirewallDefinition)
const rules=Array.from({length:12},(_,i)=>({...validateWindowsRule({...emptyWindowsForm(),name:`Rule ${i}`,kind:'port',protocol:i%2?'tcp':'udp',localPorts:`${i*100+1}-${i*100+2}`,remotePorts:`${i*200+3}-${i*200+4}`}).rule!,id:i+1,enabled:true,action:'block' as const}))
document.getElementById('measure')!.addEventListener('click',()=>{const answer={...runtime.initialAnswer(),state:{...initialWindowsState(),rules,nextRuleId:13}};for(let i=0;i<5;i++)runtime.grade(answer);const times=Array.from({length:10},()=>{const start=performance.now();runtime.grade(answer);return performance.now()-start}).sort((a,b)=>a-b);const analysis=analyzeWindows(rules);document.getElementById('report')!.textContent=JSON.stringify({p95:times[9],max:times[9],cells:analysis.cells,ruleVisits:analysis.ruleVisits})})
