/* 
  Импортировать из vite функции test и expect.
	Реализовать тесты для функции is_prime из файла basic11.js
*/

import { test, expect } from 'vitest'
import { is_prime } from './basic11'

test('is_prime should return true for prime numbers', () => {
  expect(is_prime(2)).toBe(true)
  expect(is_prime(3)).toBe(true)
  expect(is_prime(5)).toBe(true)
  expect(is_prime(7)).toBe(true)
  expect(is_prime(11)).toBe(true)
  expect(is_prime(13)).toBe(true)
  expect(is_prime(17)).toBe(true)
  expect(is_prime(19)).toBe(true)
})

test('is_prime should return false for non-prime numbers', () => {
  expect(is_prime(0)).toBe(false)
  expect(is_prime(1)).toBe(false)
  expect(is_prime(4)).toBe(false)
  expect(is_prime(6)).toBe(false)
  expect(is_prime(8)).toBe(false)
  expect(is_prime(9)).toBe(false)
  expect(is_prime(10)).toBe(false)
  expect(is_prime(12)).toBe(false)
})

