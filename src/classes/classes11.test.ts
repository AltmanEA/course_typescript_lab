/* 
  Импортировать из vite функции test и expect.
	Реализовать тесты для метода count из класса Collection из файла classes11.ts
*/

import { test, expect } from 'vitest';
import { Collection } from './classes11';

class Item {
  value: number;
  constructor(value: number) {
    this.value = value;
  }
  equals(other: Item): boolean {
    return this.value === other.value;
  }
}

test('count method should return correct count of items', () => {
  const item1 = new Item(1);
  const item2 = new Item(2);
  const item3 = new Item(3);

  const collection = new Collection(item1, item2, item1, item3, item1);

  expect(collection.count(item1)).toBe(3);
  expect(collection.count(item2)).toBe(1);
  expect(collection.count(item3)).toBe(1);
  expect(collection.count(new Item(4))).toBe(0);
});

