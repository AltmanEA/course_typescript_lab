/*   Импортировать из vite функции test и expect.
	Реализовать тесты для метода getGreatest из класса Сollection из файла classes10.ts
*/

import { test, expect } from "vitest";
import { Collection } from "./classes10";

class ComparableItem {
  value: number;
  constructor(value: number) {
    this.value = value;
  }
  isGreaterThan(other: ComparableItem): boolean {
    return this.value > other.value;
  }
}

test("getGreatest should return the greatest element", () => {
  const collection = new Collection(
    new ComparableItem(1),
    new ComparableItem(3),
    new ComparableItem(2)
  );
  const greatest = collection.getGreatest();
  expect(greatest?.value).toBe(3);
});

test("getGreatest should return undefined for empty collection", () => {
  const collection = new Collection<ComparableItem>();
  const greatest = collection.getGreatest();
  expect(greatest).toBeUndefined();
});

test("getGreatest should return the only element in a single-element collection", () => {
  const collection = new Collection(new ComparableItem(5));
  const greatest = collection.getGreatest();
  expect(greatest?.value).toBe(5);
});
