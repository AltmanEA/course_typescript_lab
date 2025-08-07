/* 
  Импортировать из vite функции test и expect.
	Реализовать тесты для класса Task из файла classes05.ts
*/

import { test, expect } from 'vitest';
import { Task } from './classes05';

test('Task constructor should initialize with title only', () => {
  const task = new Task('Test Task');
  expect(task.title).toBe('Test Task');
  expect(task.done).toBe(false); // Default value for done
});

test('Task constructor should initialize with title and done status', () => {
  const task = new Task('Test Task', true);
  expect(task.title).toBe('Test Task');
  expect(task.done).toBe(true);
});

test('Task constructor should set done to false if not provided', () => {
  const task = new Task('Test Task');
  expect(task.done).toBe(false);
});

