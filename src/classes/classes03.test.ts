/* 
  Импортировать из vite функции test и expect.
	Реализовать тесты для класса Student из файла classes03.ts
*/

import { test, expect } from 'vitest';
import { Student } from './classes03';

test('Student constructor should correctly assign properties', () => {
  const student1 = new Student('John', 20, 'group1');
  expect(student1.person.name).toBe('John');
  expect(student1.person.age).toBe(20);
  expect(student1.group).toBe('group1');

  const student2 = new Student('Jane', 25, 'group2');
  expect(student2.person.name).toBe('Jane');
  expect(student2.person.age).toBe(25);
  expect(student2.group).toBe('group2');
});
