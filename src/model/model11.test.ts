import { test, expect } from 'vitest';
import { MemoryStorage } from './model11';

test('save method should save data', () => {
  const storage = new MemoryStorage();
  storage.save('Hello, world!');
  expect(storage.load()).toBe('Hello, world!');
});

test('load method should return saved data', () => {
  const storage = new MemoryStorage();
  storage.save('Hello, world!');
  expect(storage.load()).toBe('Hello, world!');
});
