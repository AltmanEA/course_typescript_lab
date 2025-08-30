import { test, expect } from 'vitest'
import { some } from './basic38'

test('some should return true if array contains element', () => {
  expect(some([1, 2, 3, 4, 5], (x) => x % 2 == 0)).toBe(true)
  expect(some([-1, 0, 1, 2, 3], (x) => x >= 0)).toBe(true)
  expect(some([5, 5, 5, 5], (x) => x % 2 == 0)).toBe(false)
  expect(some([1, 2, 3, 4, 5], (x) => x % 2 == 0)).toBe(true)
})

test('some should return false if array does not contain element', () => {
  expect(some([], (x) => x % 2 == 0)).toBe(false)
  expect(some([1, 2, 3], (x) => x % 2 != 0)).toBe(true)
  expect(some([-1, 0, 1], (x) => x < 0)).toBe(true)
  expect(some([5, 5, 5, 5], (x) => x % 2 != 0)).toBe(true)
})
