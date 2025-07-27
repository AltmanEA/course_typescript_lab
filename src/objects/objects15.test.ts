/* 
  Импортировать из vite функции test и expect.
	Реализовать тесты для функции updateField из файла objects15.ts
*/

import { test, expect } from 'vitest';
import { updateField } from './objects15';

test('updateField should correctly update a field in the object', () => {
  const obj = { name: 'Alice', age: 25 };
  const updatedObj = updateField(obj, 'age', 26);
  expect(updatedObj).toEqual({ name: 'Alice', age: 26 });
  expect(updatedObj).not.toBe(obj); // Ensure it's a new object
});

test('updateField should add a new field if it does not exist', () => {
  const obj = { name: 'Bob' };
  const updatedObj = updateField(obj, 'age', 30);
  expect(updatedObj).toEqual({ name: 'Bob', age: 30 });
  expect(updatedObj).not.toBe(obj); // Ensure it's a new object
});

test('updateField should not modify the original object', () => {
  const obj = { name: 'Charlie', age: 40 };
  const updatedObj = updateField(obj, 'age', 45);
  expect(obj).toEqual({ name: 'Charlie', age: 40 }); // Original object remains unchanged
  expect(updatedObj).toEqual({ name: 'Charlie', age: 45 });
});

