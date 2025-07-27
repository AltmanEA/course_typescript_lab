/* 
  Импортировать из vite функции test и expect.
	Реализовать тесты для функции add из файла objects11.ts
*/

import { test, expect } from 'vitest'
import { add } from './objects11'

test('add should add a value to the previous value', () => {
  expect(add(5)).toBe(5);
  expect(add(10)).toBe(15);
  expect(add(20)).toBe(35);
  expect(add(-15)).toBe(20);
})
