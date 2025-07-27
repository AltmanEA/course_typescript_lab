/* 
  Импортировать из vite функции test и expect.
	Реализовать тесты для copy объекта user из файла objects1.ts
*/

import { test, expect } from 'vitest';
import { user } from './objects01';

test('copy method should return a copy of the user object', () => {
  const userCopy = user.copy();
  expect(userCopy).toEqual(user);
  expect(userCopy).not.toBe(user); // Ensure it's not the same reference
});

test('copy method should return a copy with updated properties', () => {
  const updatedName = 'Doe';
  const updatedAge = 25;
  
  const userCopy = user.copy(updatedName, updatedAge);
  
  expect(userCopy.name).toBe(updatedName);
  expect(userCopy.age).toBe(updatedAge);
  expect(userCopy).not.toBe(user); // Ensure it's not the same reference
});


