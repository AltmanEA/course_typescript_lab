/* 
  Импортировать из vite функции test и expect.
	Реализовать тесты для функции addToCollection из файла objects16.ts
*/

import { test, expect } from 'vitest'
import { addToCollection } from './objects16'

test('addToCollection should add element to collection', () => {
  const obj = { users: [] as string[] }
  const updatedObj = addToCollection(obj, 'users', 'Alice')
  expect(updatedObj).toEqual({ users: ['Alice'] });
  expect(updatedObj).not.toBe(obj); // Ensure it's not the same reference
})

test('addToCollection should add element to existing collection', () => {
  const obj = { users: ['Bob', 'John'] }
  const updatedObj = addToCollection(obj, 'users', 'Alice')
  expect(updatedObj).toEqual({ users: ['Bob', 'John', 'Alice'] });
  expect(updatedObj).not.toBe(obj); // Ensure it's not the same reference
})
