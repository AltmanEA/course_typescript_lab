import { test, expect } from 'vitest'
import { second_largest } from './basic18'

test('second_largest should return correct second largest element', () => {
  expect(second_largest([1, 2, 3, 4, 5])).toBe(4)
  expect(second_largest([5, 4, 3, 2, 1])).toBe(4)
  expect(second_largest([5, 5, 5, 5, 5])).toBe(null)
  expect(second_largest([5])).toBe(null)
  expect(second_largest([])).toBe(null)
  expect(second_largest([3, 3, 4, 4, 5, 5])).toBe(4)
})

