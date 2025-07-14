/* 
  Импортировать из vite функции test и expect.
	Реализовать тесты для функции replace_word из файла basic24.js
*/

import { test, expect } from 'vitest'
import { replace_word } from './basic24'

test('replace_word should return string with replaced word', () => {
  expect(replace_word('hello world', 'world', 'JS')).toBe('hello JS')
  expect(replace_word('   hello   world   ', 'world', 'JS')).toBe('   hello   JS   ')
  expect(replace_word('', 'world', 'JS')).toBe('')
  expect(replace_word('a b c', 'b', 'JS')).toBe('a JS c')
})
