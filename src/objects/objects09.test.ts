/* 
  Импортировать из vite функции test и expect.
	Реализовать тесты для метода move в объекте point из файла objects9.ts
*/

import { test, expect } from 'vitest';
import { point } from './objects09';

test('move method should correctly update the coordinates of the point', () => {
  point.x = 0;
  point.y = 0;
  point.move(5, 7);
  expect(point.x).toBe(5);
  expect(point.y).toBe(7);

  point.move(-3, -4);
  expect(point.x).toBe(2);
  expect(point.y).toBe(3);
});

test('move method should handle zero displacement', () => {
  point.x = 1;
  point.y = 1;
  point.move(0, 0);
  expect(point.x).toBe(1);
  expect(point.y).toBe(1);
});


