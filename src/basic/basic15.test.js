import { test, expect } from 'vitest'
import { swap_first_last } from './basic15'

test('swap_first_last should return new array with first and last elements swapped', () => {
  expect(swap_first_last([1, 2, 3])).toEqual([3, 2, 1])
  expect(swap_first_last([1, 2, 3, 4])).toEqual([4, 2, 3, 1])
  expect(swap_first_last([1, 2, 3, 4, 5])).toEqual([5, 2, 3, 4, 1])
})

test('swap_first_last should not modify original array', () => {
  const original = [1, 2, 3];
  const result = swap_first_last(original);
  expect(original).toEqual([1, 2, 3]);
  expect(result).toEqual([3, 2, 1]);
})
