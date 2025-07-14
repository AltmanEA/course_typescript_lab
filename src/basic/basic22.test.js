/*   Импортировать из vite функции test и expect.
	Реализовать тесты для функции palindrome_check из файла basic22.js
*/

import { test, expect } from "vitest";
import { palindrome_check } from "./basic22";

test("palindrome_check", () => {
  expect(palindrome_check("")).toBe(true);
  expect(palindrome_check("a")).toBe(true);
  expect(palindrome_check("abba")).toBe(true);
  expect(palindrome_check("racecar")).toBe(true);
  expect(palindrome_check("level")).toBe(true);
  expect(palindrome_check("radar")).toBe(true);
  expect(palindrome_check("hello")).toBe(false);
  expect(palindrome_check("world")).toBe(false);
  expect(palindrome_check("ab")).toBe(false);
  expect(palindrome_check("abc")).toBe(false);
  expect(palindrome_check("notapalindrome")).toBe(false);
});

