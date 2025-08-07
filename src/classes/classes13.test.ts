/* 
  Импортировать из vite функции test и expect.
	Реализовать тесты для методов доступа класса Lesson из файла classes13.ts
*/

import { test, expect } from 'vitest';
import { Lesson } from './classes13';

test('Lesson constructor should correctly assign day and number', () => {
  const lesson = new Lesson('Monday', 2);
  expect(lesson.day).toBe('Monday');
  expect(lesson.number).toBe(2);
});

test('Lesson.number setter should not update number if outside valid range', () => {
  const lesson = new Lesson('Tuesday', 2);
  lesson.number = 11;
  expect(lesson.number).toBe(0);
  lesson.number = 0;
  expect(lesson.number).toBe(0);
});

test('Lesson.number setter should update number if within valid range', () => {
  const lesson = new Lesson('Wednesday', 2);
  lesson.number = 5;
  expect(lesson.number).toBe(5);
});

