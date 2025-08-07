/* 
  Импортировать из vite функции test и expect.
	Реализовать тесты для класса Counter из файла classes06.ts
*/

import { test, expect } from 'vitest';
import { Counter } from './classes06';

test('should be able to create a Counter', () => {
  expect(Counter).toBeDefined();
});

test('should be able to create a Counter instance', () => {
  expect(() => new Counter()).not.toThrow();
});

test('Counter.getCurrentCount method should return correct count', () => {
  Counter.count = 0;
  expect(Counter.getCurrentCount()).toBe(0);
  new Counter();
  expect(Counter.getCurrentCount()).toBe(1);
  new Counter();
  expect(Counter.getCurrentCount()).toBe(2);
});
