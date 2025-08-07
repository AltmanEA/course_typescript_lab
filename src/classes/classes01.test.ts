/* 
  Импортировать из vite функции test и expect.
	Реализовать тесты для класса Person из файла classes1.ts
*/

import { test, expect } from 'vitest';
import { Person } from './classes01';

test('getFullName should return correct full name', () => {
  const person = new Person('John', 'Doe', 25);
  expect(person.getFullName()).toBe('John Doe');
});

test('constructor should correctly assign firstName, lastName, and age', () => {
  const person = new Person('Jane', 'Smith', 30);
  expect(person.firstName).toBe('Jane');
  expect(person.lastName).toBe('Smith');
  expect(person['age']).toBe(30); // Accessing private property for testing
});

