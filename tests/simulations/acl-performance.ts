import { benchmarkAcl } from './acl-fixtures'
document.getElementById('measure')!.addEventListener('click',()=>{
  document.getElementById('report')!.textContent=JSON.stringify(benchmarkAcl(10))
})
