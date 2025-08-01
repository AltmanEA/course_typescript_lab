/* 
  Импортировать из vite функции test и expect.
	Реализовать тесты для функции capitalize_words из файла basic21.js
*/

import { test, expect } from 'vitest'
import { capitalize_words } from './basic21'

test('capitalize_words should return string with capitalized words', () => {
  expect(capitalize_words('hello world')).toBe('Hello World')
  expect(capitalize_words('   hello   world   ')).toBe('   Hello   World   ')
  expect(capitalize_words('')).toBe('')
  expect(capitalize_words('a b c')).toBe('A B C')
})
