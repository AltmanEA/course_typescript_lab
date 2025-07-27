/* 
  Импортировать из vite функции test и expect.  
	Реализовать тесты для equal объекта user.  
  Копии объекта создать с помощью ...
*/

import { expect, test } from 'vitest';
import { user } from './objects02';

test('equal method should return true for equal objects', () => {
  const userCopy = { ...user };
  expect(user.equal(userCopy)).toBe(true);
});

test('equal method should return false for unequal objects', () => {
  const userCopyDifferentName = { ...user, name: 'Different Name' };
  const userCopyDifferentAge = { ...user, age: 40 };
  expect(user.equal(userCopyDifferentName)).toBe(false);
  expect(user.equal(userCopyDifferentAge)).toBe(false);
});
