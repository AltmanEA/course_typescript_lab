/* 
  Импортировать из vite функции test и expect.
	Реализовать тесты для функции removeField из файла objects17.ts
*/

import { test, expect } from 'vitest';
import { removeField } from './objects17';

test('removeField should remove field from object', () => {
  const obj = { name: 'Alice', age: 25 };
  const updatedObj = removeField(obj, 'age');
  expect(updatedObj).toEqual({ name: 'Alice' });
  expect(updatedObj).not.toBe(obj); // Ensure it's a new object
});

test('removeField should not modify the original object', () => {
  const obj = { name: 'Bob', age: 40 };
  const updatedObj = removeField(obj, 'age');
  expect(obj).toEqual({ name: 'Bob', age: 40 }); // Original object remains unchanged
  expect(updatedObj).toEqual({ name: 'Bob' });
});
