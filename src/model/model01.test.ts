import { test, expect, vi } from 'vitest';
import { Animal, Dog } from './model01';

test('Animal constructor should initialize with name', () => {
  const animal = new Animal('Dog');
  expect(animal.name).toBe('Dog');
});

test('Animal makeSound method should log a generic sound', () => {
  const spy = vi.spyOn(console, 'log');
  const animal = new Animal('Dog');
  animal.makeSound();
  expect(spy).toHaveBeenCalledWith('Some generic sound');
});

test('Dog bark method should log "Woof!"', () => {
  const spy = vi.spyOn(console, 'log');
  const dog = new Dog('Dog');
  dog.bark();
  expect(spy).toHaveBeenCalledWith('Woof!');
});
