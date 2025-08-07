/* 
  Импортировать из vite функции test и expect.
	Реализовать тесты для методов moveTo и getMaxX класса Square из файла classes17.ts
*/

import { test, expect } from 'vitest';
import { Square, Point } from './classes17';


test('moveTo method should correctly move the square', () => {
  const point1 = new Point(0, 0);
  const point2 = new Point(2, 2);
  const square = new Square(point1, point2);

  const newPoint = new Point(3, 3);
  square.moveTo(newPoint);

  expect(square.point1).toEqual(newPoint);
  expect(square.point2).toEqual(new Point(5, 5));
});

test('moveTo method should correctly move another square', () => {
  const point1 = new Point(1, 1);
  const point2 = new Point(4, 4);
  const square = new Square(point1, point2);

  const newPoint = new Point(2, 2);
  square.moveTo(newPoint);

  expect(square.point1).toEqual(newPoint);
  expect(square.point2).toEqual(new Point(5, 5));

});


