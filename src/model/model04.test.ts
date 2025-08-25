import { test, expect, vi } from 'vitest';
import { Shape, Circle } from './model04';

test('Shape.draw should log "Drawing shape"', () => {
  const spy = vi.spyOn(console, 'log');
  const shape = new Shape();
  shape.draw();
  expect(spy).toHaveBeenCalledWith('Drawing shape');
});

test('Circle.draw should log "Drawing shape" and "Drawing circle"', () => {
  const spy = vi.spyOn(console, 'log');
  const circle = new Circle();
  circle.draw();
  expect(spy).toHaveBeenCalledWith('Drawing shape');
  expect(spy).toHaveBeenCalledWith('Drawing circle');
});

test('Circle should be an instance of Shape', () => {
  const circle = new Circle();
  expect(circle).toBeInstanceOf(Shape);
});
