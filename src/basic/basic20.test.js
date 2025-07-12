/* 
  Импортировать из vite функции test и expect.
	Реализовать тесты для функции concatenate_strings из файла basic20.js
*/

import { test, expect } from 'vitest'
import { concatenate_strings } from './basic20'

test('concatenate_strings should return concatenated string', () => {
  expect(concatenate_strings(['a', 'b', 'c'])).toBe('abc')
  expect(concatenate_strings(['a', '', 'c'])).toBe('ac')
  expect(concatenate_strings([''])).toBe('')
  expect(concatenate_strings(['a', 'b', 'c', 'd'])).toBe('abcd')
})
