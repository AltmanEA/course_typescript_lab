/* 
  Импортировать из vite функции test и expect.
	Реализовать тесты для функции strip_special_chars из файла basic23.js
*/

import { test, expect } from 'vitest'
import { strip_special_chars } from './basic23'

test('strip_special_chars should return string with special characters removed', () => {
  expect(strip_special_chars('hello world')).toBe('hello world')  
  expect(strip_special_chars('')).toBe('')
  expect(strip_special_chars('a b c')).toBe('a b c')
  expect(strip_special_chars('!@#$%^&*()')).toBe('')
  expect(strip_special_chars('a!b@c#d$e%f^g&h*i(j)k')).toBe('abcdefghijk')
})
