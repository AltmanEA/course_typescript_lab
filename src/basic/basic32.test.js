import { test, expect } from 'vitest'
import { matrixMultiplication } from './basic32'

test('matrixMultiplication should return correct matrix', () => {
  expect(matrixMultiplication([[1, 2], [3, 4]], [[5, 6], [7, 8]])).toEqual([[19, 22], [43, 50]]);
  expect(matrixMultiplication([[1, 2], [3, 4]], [[5], [7]])).toEqual([[19], [43]]);
  expect(matrixMultiplication([[1], [3], [5]], [[2, 4]])).toEqual([[2, 4], [6, 12], [10, 20]]);
  expect(matrixMultiplication([[1, 2]], [[3], [4]])).toEqual([[11]]);
  expect(matrixMultiplication([[1, 2, 3]], [[4], [5], [6]])).toEqual([[32]]);
})
