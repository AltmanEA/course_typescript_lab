import { test, expect } from 'vitest'
import { longerString } from './basic02'

test('longerString should return longer string', () => {
  expect(longerString('a', 'b')).toBe('a')
  expect(longerString('ab', 'b')).toBe('ab')
  expect(longerString('a', 'ab')).toBe('ab')
})
