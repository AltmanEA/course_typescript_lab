import { test, expect } from 'vitest'
import { average } from './basic13'

test('average should return correct average', () => {
  expect(average([1, 2, 3])).toBe(2)
  expect(average([0, 10, 20])).toBe(10)
  expect(average([-1, 0, 1])).toBe(0)
  expect(average([5, 5, 5, 5])).toBe(5)
  expect(average([1, 2, 3, 4, 5])).toBe(3)
})

