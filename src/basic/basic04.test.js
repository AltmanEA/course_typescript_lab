/* 
  Импортировать из vite функции test и expect.
  Реализовать тесты для функции calculate_discount из файла basic04.js 
*/

import { test, expect } from 'vitest'
import { calculate_discount } from './basic04'

test('calculate_discount should return correct discounted price', () => {
  expect(calculate_discount(100, 20)).toBe(80)
  expect(calculate_discount(200, 50)).toBe(100)
})

test('calculate_discount should return error for discount greater than 100%', () => {
  expect(calculate_discount(100, 150)).toBe("Ошибка! Процент скидки слишком большой.")
})

