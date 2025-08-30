import { test, expect } from 'vitest'
import { even_elements } from './basic14'

test('even_elements should return correct elements', () => {
  expect(even_elements([1, 2, 3, 4])).toEqual([2, 4])
  expect(even_elements([-1, 0, 1, 2, 3])).toEqual([0, 2])
  expect(even_elements([5, 5, 5, 5])).toEqual([])
  expect(even_elements([1, 2, 3, 4, 5])).toEqual([2, 4])
})
