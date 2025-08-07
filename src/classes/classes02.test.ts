/* 
  Импортировать из vite функции test и expect.
	Реализовать тесты для класса Product из файла classes02.ts
*/

import { test, expect } from 'vitest';
import { Product } from './classes02';

test('Product constructor should initialize with valid name and price', () => {
  const product = new Product('Laptop', 1000);
  expect(product.name).toBe('Laptop');
  expect(product.price).toBe(1000);
});

test('Product constructor should set price to 0 if negative price is given', () => {
  const product = new Product('Laptop', -100);
  expect(product.price).toBe(0);
});

