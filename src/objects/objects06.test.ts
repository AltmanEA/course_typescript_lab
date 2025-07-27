/* 
  Импортировать из vite функции test и expect.
	Реализовать тесты для метода equal объекта user из файла objects6.ts
*/

import { test, expect } from 'vitest'
import { user } from './objects06'

test('equal method should return true for structurally equal users', () => {
  const userCopy = { ...user, role: [...user.role] };
  expect(user.equal(userCopy)).toBe(true);
});

test('equal method should return false for users with different properties', () => {
  const userCopyDifferentName = { ...user, name: 'Different Name' };
  const userCopyDifferentAge = { ...user, age: 40 };
  const userCopyDifferentRole = { ...user, role: ['moderator'] };
  expect(user.equal(userCopyDifferentName)).toBe(false);
  expect(user.equal(userCopyDifferentAge)).toBe(false);
  expect(user.equal(userCopyDifferentRole)).toBe(false);
});
