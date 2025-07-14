/* 
  Импортировать из vite функции test и expect.
	Реализовать тесты для функции splitAndMergeStrings из файла basic26.js
*/

import { test, expect } from 'vitest'
import { splitAndMergeStrings } from './basic26'

test('splitAndMergeStrings should return array of strings', () => {
  expect(splitAndMergeStrings(['hello', 'world'])).toEqual(['hel', 'lo', 'wor', 'ld'])
  expect(splitAndMergeStrings(['hello', 'world', '!'])).toEqual(['hel', 'lo', 'wor', 'ld', '!'])
  expect(splitAndMergeStrings(['hello', 'world', '!', 'test'])).toEqual(['hel', 'lo', 'wor', 'ld', '!', 'te', 'st'])
  expect(splitAndMergeStrings(['hello', 'world', '!', 'test', '123'])).toEqual(['hel', 'lo', 'wor', 'ld', '!', 'te', 'st', '12', '3'])
})
