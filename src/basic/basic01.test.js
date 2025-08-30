import { test, expect } from 'vitest'
import { max } from './basic01'

test('max should return bigger number', () => {
  expect(max(1, 2)).toBe(2)
  expect(max(2, 1)).toBe(2)
  expect(max(1, 1)).toBe(1)
})
