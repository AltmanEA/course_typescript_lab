/* 
  Импортировать из vite функции test и expect.
	Реализовать тесты для геттера info из класса Student из файла classes15.ts
*/

import { test, expect } from 'vitest';
import { Student } from './classes15';

test('Student info getter should return correct string', () => {
  expect(Student.info).toBe('Всего 0 студентов');
  new Student('John', 'Doe');
  expect(Student.info).toBe('Всего 1 студентов');
  new Student('Jane', 'Doe');
  expect(Student.info).toBe('Всего 2 студентов');
});

