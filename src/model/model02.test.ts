import { test, expect, vi } from 'vitest';
import { Car, Vehicle } from './model02';

test('Car.move should log "Car is moving"', () => {
  const spy = vi.spyOn(console, 'log');
  const car = new Car();
  car.move();
  expect(spy).toHaveBeenCalledWith('Car is moving');
});

test('Car should be an instance of Vehicle', () => {
  const car = new Car();
  expect(car).toBeInstanceOf(Vehicle);
});
