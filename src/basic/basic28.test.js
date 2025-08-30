import { test, expect } from 'vitest'
import { removeDuplicates } from './basic28'

test('removeDuplicates should return array with duplicates removed', () => {
  expect(removeDuplicates([1, 2, 2, 3, 4, 4, 5])).toEqual([1, 2, 3, 4, 5])
  expect(removeDuplicates([1, 1, 1, 1, 1])).toEqual([1])
  expect(removeDuplicates([5, 4, 3, 3, 2, 1, 1, 5])).toEqual([5, 4, 3, 2, 1])
  expect(removeDuplicates([])).toEqual([])
  expect(removeDuplicates([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5])
})
