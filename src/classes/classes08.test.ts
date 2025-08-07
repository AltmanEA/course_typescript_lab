/* 
  Импортировать из vite функции test и expect.
	Реализовать тесты для класса Animal из файла classes08.ts
*/

import { test, expect, vi, beforeEach } from 'vitest';
import { Animal } from './classes08';

beforeEach(() => {
  Animal.animalCount = 0;
});

test('Animal constructor should initialize with name and species', () => {
  const animal = new Animal('Dog', 'Canis lupus familiaris');
  expect(animal.name).toBe('Dog');
  expect(animal.species).toBe('Canis lupus familiaris');
});

test('Animal constructor should increment animalCount', () => {
  const animal1 = new Animal('Dog', 'Canis lupus familiaris');
  const animal2 = new Animal('Cat', 'Felis catus');
  expect(Animal.getAnimalCount()).toBe(2);
});

test('Animal.greet should log a greeting message', () => {
  const animal = new Animal('Dog', 'Canis lupus familiaris');
  const spy = vi.spyOn(console, 'log');
  animal.greet();
  expect(spy).toHaveBeenCalledWith(
    'Привет, меня зовут Dog! Я представитель вида Canis lupus familiaris.'
  );
});
