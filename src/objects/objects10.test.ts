/* 
  Импортировать из vite функции test и expect.
	Реализовать тесты объекта counter из файла objects10.ts
*/

import { test, expect } from 'vitest';
import { counter } from './objects10';

test('counter count method should increment x', () => {
  counter.x = 0; // Reset counter
  counter.count();
  expect(counter.x).toBe(1);
  counter.count();
  expect(counter.x).toBe(2);
});

test('counter count method should return new value of x', () => {
  counter.x = 5; // Set initial value
  expect(counter.count()).toBe(6);
  expect(counter.count()).toBe(7);
});


