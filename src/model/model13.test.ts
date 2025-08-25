import { test, expect, describe, vi } from 'vitest';
import { Bird, Penguin } from './model13';

// Тесты для задачи 1: Совместимость возвращаемых типов
describe('LSP Task 1: Return type compatibility', () => {
  test('Penguin should return Penguin instance', () => {
    const penguin = new Penguin();
    const result = penguin.fly();
    expect(result).toBeInstanceOf(Penguin);
  });

  test('Penguin should be substitutable for Bird', () => {
    const bird: Bird = new Penguin();
    const result = bird.fly();
    expect(result).toBeInstanceOf(Bird);
  });

  
  test('Penguin fly method should log "Penguin is flying"', () => {
    const spy = vi.spyOn(console, 'log');
    const penguin = new Penguin();
    penguin.fly();
    expect(spy).toHaveBeenCalledWith("Cannot fly");
  });
});
