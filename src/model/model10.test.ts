import { test, expect, vi } from 'vitest';
import { Cat } from './model10';

test('Cat constructor should initialize with name', () => {
  const cat = new Cat('Whiskers');
  expect(cat.name).toBe('Cat Whiskers');
});

test('Cat makeSound method should log "Meow!"', () => {
  const spy = vi.spyOn(console, 'log');
  const cat = new Cat('Whiskers');
  cat.makeSound();
  expect(spy).toHaveBeenCalledWith('Meow!');
});
