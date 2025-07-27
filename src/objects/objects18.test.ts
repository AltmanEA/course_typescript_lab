/* 
  Импортировать из vite функции test и expect.
	Реализовать тесты для метода uppercaseProfileNames объекта user из файла objects18.ts
*/

import { test, expect } from 'vitest'
import { user } from './objects18'

test('uppercaseProfileNames method should return new object with uppercase name', () => {
  const userCopy = user.uppercaseProfileNames();
  expect(userCopy).toEqual({ ...user, profile: { ...user.profile, name: user.profile.name.toUpperCase() } });
  expect(userCopy).not.toBe(user); // Ensure it's not the same reference
  expect(userCopy.profile).not.toBe(user.profile); // Ensure deep copy of nested object
});
