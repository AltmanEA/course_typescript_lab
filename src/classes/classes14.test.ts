/* 
  Импортировать из vite функции test и expect.
	Реализовать тесты для геттера full_name из класса Student из файла classes14.ts
*/

import { test, expect } from 'vitest';
import { Student } from './classes14';

test('Student full_name getter should return correct full name', () => {
  const student = new Student('John', 'Doe');
  expect(student.full_name).toBe('John Doe');
});

