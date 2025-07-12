/* 
  Импортировать из vite функции test и expect.
  Реализовать тесты для longerString функции из файла basic02.js 
*/

import { test, expect } from 'vitest'
import { longerString } from './basic02'

test('longerString should return longer string', () => {
  expect(longerString('a', 'b')).toBe('a')
  expect(longerString('ab', 'b')).toBe('ab')
  expect(longerString('a', 'ab')).toBe('ab')
})
