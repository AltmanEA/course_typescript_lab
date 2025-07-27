/* 
  Импортировать из vite функции test и expect.
	Реализовать тесты для copy объекта user из файла objects3.ts
*/

import { test, expect } from 'vitest';
import { user } from './objects03';

test('copy method should return a deep copy of the user object', () => {
  const userCopy = user.copy();
  expect(userCopy).toEqual(user);
  expect(userCopy).not.toBe(user); // Ensure it's not the same reference
  expect(userCopy.address).not.toBe(user.address); // Ensure deep copy of nested object
});

test('copy method should return a deep copy with updated properties', () => {
  const updatedName = 'Doe';
  const updatedAge = 25;
  const updatedAddress = { street: 'New Street', building: 456 };

  const userCopy = user.copy(updatedName, updatedAge, updatedAddress);

  expect(userCopy.name).toBe(updatedName);
  expect(userCopy.age).toBe(updatedAge);
  expect(userCopy.address).toEqual(updatedAddress);
  expect(userCopy).not.toBe(user); // Ensure it's not the same reference
  expect(userCopy.address).not.toBe(user.address); // Ensure deep copy of nested object
});

