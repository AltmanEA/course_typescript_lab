import { test, expect, vi } from 'vitest';
import { Duck } from './model07';


test('Duck.swim should log "Duck is swimming"', () => {
  const spy = vi.spyOn(console, 'log');
  const duck = new Duck();
  duck.swim();
  expect(spy).toHaveBeenCalledWith('Duck is swimming');
});

test('Duck.dive should log "Duck is diving"', () => {
  const spy = vi.spyOn(console, 'log');
  const duck = new Duck();
  duck.dive();
  expect(spy).toHaveBeenCalledWith('Duck is diving');
});
