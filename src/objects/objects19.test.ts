/* 
  Импортировать из vite функции test и expect.
	Реализовать тесты для метода withTaxRate объекта product из файла objects19.ts
*/

import { test, expect } from 'vitest';
import { product } from './objects19';

test('withTaxRate should return a new object with taxAmount property', () => {
  const updatedProduct = product.withTaxRate(0.2);
  expect(updatedProduct).toEqual({ ...product, taxAmount: product.price * 0.2 });
  expect(updatedProduct).not.toBe(product); // Ensure it's a new object
});
