/* 
  Импортировать из vite функции test и expect.
	Реализовать тесты для метода equal объекта user из файла objects4.ts
*/

import { test, expect } from 'vitest';
import { user } from './objects04';

test('equal method should return true for structurally equal users', () => {
  const userCopy = { ...user, address: { ...user.address } };
  expect(user.equal(userCopy)).toBe(true);
});

test('equal method should return false for users with different properties', () => {
  const differentAddress = { ...user.address, street: 'Different Street' };
  const userCopyDifferentName = { ...user, name: 'Different Name' };
  const userCopyDifferentAge = { ...user, age: 40 };  
  const userCopyDifferentAddress = { ...user, address: differentAddress };
  expect(user.equal(userCopyDifferentName)).toBe(false);
  expect(user.equal(userCopyDifferentAge)).toBe(false);
  expect(user.equal(userCopyDifferentAddress)).toBe(false);
});

