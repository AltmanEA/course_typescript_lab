import { test, expect } from 'vitest'
import { sum_positive } from './basic19'

test('sum_positive should return correct sum', () => {
  expect(sum_positive([1, 2, -3, 4, -5])).toBe(7)
  expect(sum_positive([0, 1, 2, 3, 4, 5])).toBe(15)
  expect(sum_positive([-1, 0, 1, 2, 3])).toBe(6)
  expect(sum_positive([-1, -2, -3, -4, -5])).toBe(0)
  expect(sum_positive([])).toBe(0)
})
