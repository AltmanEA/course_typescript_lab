/* 
  Импортировать из vite функции test и expect.
	Реализовать тесты для методов moveTo и getMaxX класса Circle из файла classes18.ts
*/

import { test, expect } from 'vitest';
import { Circle, Point } from './classes18';

test('moveTo method should correctly move the circle', () => {
  const circle = new Circle(0, 0, 5);

  const newPoint = new Point(2, 2);
  circle.moveTo(newPoint);
  
  expect(circle.getMaxX()).toBe(7);
});

test('moveTo method should correctly move another circle', () => {
  const circle = new Circle(1, 1, 3);

  const newPoint = new Point(4, 4);
  circle.moveTo(newPoint);

  expect(circle.getMaxX()).toBe(7);
});

