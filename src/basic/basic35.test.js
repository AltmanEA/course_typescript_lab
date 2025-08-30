import { test, expect } from 'vitest'
import { diagonalSum } from './basic35'

test('diagonalSum should return correct diagonal sum', () => {
  expect(diagonalSum([[1, 2, 3], [4, 5, 6], [7, 8, 9]])).toBe(15)
  expect(diagonalSum([[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16]])).toBe(34)
})
