/* 
  Импортировать из vite функции test и expect.
	Реализовать тесты для функции check_leap_year из файла basic06.js
*/

import { test, expect } from 'vitest'
import { check_leap_year } from './basic06'

test('check_leap_year should return true for leap years', () => {
  expect(check_leap_year(2000)).toBe(true)
  expect(check_leap_year(2016)).toBe(true)
  expect(check_leap_year(2020)).toBe(true)
})

test('check_leap_year should return false for non-leap years', () => {
  expect(check_leap_year(1900)).toBe(false)
  expect(check_leap_year(2019)).toBe(false)
  expect(check_leap_year(2021)).toBe(false)
})

