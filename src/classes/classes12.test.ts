/* 
  Импортировать из vite функции test и expect.
	Реализовать тесты для метода swap из класса Pair из файла classes12.ts
*/

import { test, expect } from 'vitest';
import { Pair } from './classes12';

test('swap method should swap the elements of the pair', () => {
  const pair = new Pair('first', 'second');
  expect(pair.getFirst()).toBe('first');
  expect(pair.getSecond()).toBe('second');
  
  pair.swap();
  
  expect(pair.getFirst()).toBe('second');
  expect(pair.getSecond()).toBe('first');
});

test('swap method should maintain the type of elements', () => {
  const pair = new Pair(1, 2);
  expect(pair.getFirst()).toBe(1);
  expect(pair.getSecond()).toBe(2);
  
  pair.swap();
  
  expect(pair.getFirst()).toBe(2);
  expect(pair.getSecond()).toBe(1);
});

