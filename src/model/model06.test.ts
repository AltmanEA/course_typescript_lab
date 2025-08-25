import { test, expect, vi } from 'vitest';
import { Bird } from './model06';

test('Bird.fly should log "I\'m flying!"', () => {
  const spy = vi.spyOn(console, 'log');
  const bird = new Bird();
  bird.fly();
  expect(spy).toHaveBeenCalledWith('I\'m flying!');
});
