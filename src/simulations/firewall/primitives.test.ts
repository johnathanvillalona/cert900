import { describe, expect, it } from 'vitest'
import { address, formatIPv4, ipv4, ports } from './primitives'
describe('IPv4 and port selectors', () => {
  it.each(['0.0.0.0','255.255.255.255','192.0.2.80'])('round trips %s without signed overflow', value => expect(formatIPv4(ipv4(value)!)).toBe(value))
  it.each(['::1','256.0.0.1','1.2.3','1.2.3.4.5','01.2.3.4','host.test','1.2.3.-1'])('rejects malformed or unsupported address %s', value => expect(address(value)).toBeNull())
  it.each(['1.2.3.4/33','1.2.3.4/-1','1.2.3.4/','1.2.3.4/24/1'])('rejects malformed prefix %s', value => expect(address(value)).toBeNull())
  it('normalizes CIDR host bits and handles /0 /31 /32 endpoints', () => {
    expect(address('10.20.30.42/24')).toEqual({ start: ipv4('10.20.30.0'), end: ipv4('10.20.30.255'), text: '10.20.30.0/24' })
    expect(address('255.255.255.255/0')).toEqual({ start: 0, end: 2 ** 32 - 1, text: '0.0.0.0/0' })
    expect(address('255.255.255.255/31')!.start).toBe(2 ** 32 - 2)
    expect(address('255.255.255.255/32')!.end).toBe(2 ** 32 - 1)
    expect(address(' any ')).toEqual({ start: 0, end: 2 ** 32 - 1, text: 'Any' })
  })
  it.each(['0','65535','0-65535',' 22 - 443 ','Any'])('accepts port interval %s', value => expect(ports(value)).not.toBeNull())
  it.each(['-1','65536','443-22','22,443','https','1.5','1e3',''])('rejects port interval %s', value => expect(ports(value)).toBeNull())
})
