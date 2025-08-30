import { test, expect } from 'vitest'
import { areEqual } from './basic03'

test('areEqual should return true for equal numbers', () => {
  expect(areEqual(1, 1, 1)).toBe(true)
})

test('areEqual should return false for unequal numbers', () => {
  expect(areEqual(1, 2, 3)).toBe(false)
  expect(areEqual(1, 1, 2)).toBe(false)
  expect(areEqual(2, 3, 2)).toBe(false)
})

