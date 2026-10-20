import { expect, it } from 'vitest'
import { EXAMS } from '../data/index'
import { prepareWebSimulations, webScenarioIds } from './web-registry'
it('prepares matching lazy definitions/renderers while keeping Windows and legacy exams opt-out', async () => {
  for(const exam of [EXAMS['220-1201'],EXAMS['n10-009']]) {
    const prepared=await prepareWebSimulations(exam)
    expect(Object.keys(prepared.views)).toEqual(webScenarioIds(exam.id))
    for(const runtime of Object.values(prepared.bindings)) expect(typeof prepared.views[runtime.id].View).toBe('function')
  }
  expect(webScenarioIds('220-1202')).toEqual([])
  expect(await prepareWebSimulations(EXAMS['az-900'])).toEqual({bindings:{},views:{}})
})
