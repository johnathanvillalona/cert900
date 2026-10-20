import { expect, it } from 'vitest'
import { benchmarkAcl } from '../../../tests/simulations/acl-fixtures'
it('grades maximum boundaries, overlapping ranges and complete policies within the warmed Node budget', () => {
  const report=benchmarkAcl(25)
  console.info('ACL Node performance:',JSON.stringify(report))
  for(const result of report) {expect(result.p95).toBeLessThanOrEqual(250);expect(result.cells).toBeLessThanOrEqual(43740);expect(result.ruleVisits).toBeLessThanOrEqual(524880)}
})
