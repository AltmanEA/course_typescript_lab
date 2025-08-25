import { test, expect } from 'vitest';
import { DiscountedProduct } from './model05';

test('DiscountedProduct constructor should initialize with valid price and discountPercentage', () => {
  const discountedProduct = new DiscountedProduct(1000, 20);
  expect(discountedProduct.price).toBe(1000);
  expect(discountedProduct.discountPercentage).toBe(20);
});
