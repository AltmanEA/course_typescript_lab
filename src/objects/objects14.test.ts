/* 
  Импортировать из vite функции test и expect.
	Реализовать тесты для метода getInnerFunction объекта objectWithInnerFunction из файла objects14.ts
*/

import { test, expect } from 'vitest';
import { objectWithInnerFunction } from './objects14';

test('getInnerFunction should return a function that accesses the correct value', () => {
  const innerFunction = objectWithInnerFunction.getInnerFunction();
  expect(innerFunction()).toBe(10);
});

test('getInnerFunction should maintain correct context with different object value', () => {
  const originalValue = objectWithInnerFunction.value;
  objectWithInnerFunction.value = 20;
  const innerFunction = objectWithInnerFunction.getInnerFunction();
  expect(innerFunction()).toBe(20);
  objectWithInnerFunction.value = originalValue; // Restore original value
});

