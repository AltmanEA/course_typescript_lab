/* 
  Импортировать из vite функции test и expect.
	Реализовать тесты для класса Product из файла classes09.ts
*/

import { test, expect } from 'vitest';
import { Product } from './classes09';

test('static method applyDiscount should correctly update the price of products', () => {
  Product.discountRate = 0.2;

  const products: Product[] = [
    new Product('Laptop', 1000),
    new Product('Mouse', 50),
    new Product('Keyboard', 100),
  ];

  Product.applyDiscount(products);

  expect(products[0].price).toBe(800);
  expect(products[1].price).toBe(40);
  expect(products[2].price).toBe(80);
});
