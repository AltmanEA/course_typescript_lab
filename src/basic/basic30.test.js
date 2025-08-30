import { test, expect } from 'vitest'
import { extractUniqueValues } from './basic30'

test('extractUniqueValues should return array with unique values from first array added to second array', () => {
  expect(extractUniqueValues([1, 2], [3])).toEqual([3, 1, 2])
  expect(extractUniqueValues([1, 1, 2, 2], [3, 3])).toEqual([3, 3, 1, 2])
  expect(extractUniqueValues([1, 2, 3], [])).toEqual([1, 2, 3])
  expect(extractUniqueValues([], [1, 2, 3])).toEqual([1, 2, 3])
  expect(extractUniqueValues([1, 2, 3], [1, 2, 3])).toEqual([1, 2, 3])
})
