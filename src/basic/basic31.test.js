import { test, expect } from 'vitest'
import { transposeMatrix } from './basic31'

test('transposeMatrix should return transposed matrix', () => {
  expect(transposeMatrix([[1, 2, 3], [4, 5, 6]])).toEqual([[1, 4], [2, 5], [3, 6]])
  expect(transposeMatrix([[1, 2], [3, 4], [5, 6]])).toEqual([[1, 3, 5], [2, 4, 6]])
  expect(transposeMatrix([[1], [2], [3]])).toEqual([[1, 2, 3]])
  expect(transposeMatrix([[]])).toEqual([])
})
