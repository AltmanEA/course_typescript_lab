/* 
  Импортировать из vite функции test и expect.
	Реализовать тесты для функции count_vowels из файла basic10.js.  
*/

import { test, expect } from 'vitest'
import { count_vowels } from './basic10'

test('count_vowels should return correct number of vowels', () => {
  expect(count_vowels('Привет')).toBe(2)
  expect(count_vowels('Мир')).toBe(1)
  expect(count_vowels('')).toBe(0)
  expect(count_vowels('Быстрее')).toBe(3)
  expect(count_vowels('Большой')).toBe(2)
  expect(count_vowels('Ёжик')).toBe(2)
  expect(count_vowels('Улыбка')).toBe(3)
  expect(count_vowels('Здравствуй')).toBe(2)
})

