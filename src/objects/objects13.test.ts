/* 
  Импортировать из vite функции test и expect.
	Реализовать тесты для метода greeting объекта user из файла objects13.ts используя метод vi.spyOn
*/

import { test, expect, vi } from 'vitest';
import { user } from './objects13';

test('greeting method should return correct greeting', () => {
  const spy = vi.spyOn(console, 'log');
  user.greeting();
  expect(spy).toHaveBeenCalledWith('Привет, меня зовут Алексей');
  user.name = 'Джон';
  user.greeting();
  expect(spy).toHaveBeenCalledWith('Привет, меня зовут Джон');
});
