/* 
  Импортировать из vite функции test и expect.
	Реализовать тесты для copy объекта user из файла objects05.ts
*/

import { test, expect } from 'vitest'
import { user } from './objects05'

test('copy method should return a deep copy of the user object', () => {
  const userCopy = user.copy();
  expect(userCopy).toEqual(user);
  expect(userCopy).not.toBe(user); // Ensure it's not the same reference
  expect(userCopy.role).toEqual(user.role); // Ensure deep copy of array
  expect(userCopy.role).not.toBe(user.role); // Ensure deep copy of array
});

test('copy method should return a deep copy with updated properties', () => {
  const updatedName = 'Doe';
  const updatedAge = 25;
  const updatedRole = ['user', 'moderator'];

  const userCopy = user.copy(updatedName, updatedAge, updatedRole);

  expect(userCopy.name).toBe(updatedName);
  expect(userCopy.age).toBe(updatedAge);
  expect(userCopy.role).toEqual(updatedRole);
  expect(userCopy).not.toBe(user); // Ensure it's not the same reference
  expect(userCopy.role).not.toBe(user.role); // Ensure deep copy of array
});
