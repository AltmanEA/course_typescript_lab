import { describe, expect, test, vi } from 'vitest';
import { Loggable, User } from './model18';

// Тесты для задачи 1: Базовая примесь с методом
describe('Mixin Task 1: Loggable', () => {
  test('should add log method to class', () => {
    const LoggableUser = Loggable(User);
    const user = new LoggableUser();
    
    expect(user).toHaveProperty('log');
    expect(typeof user.log).toBe('function');
  });

  test('log method should work correctly', () => {
    const consoleSpy = vi.spyOn(console, 'log');
    const LoggableUser = Loggable(User);
    const user = new LoggableUser();
    
    user.log('test message');
    expect(consoleSpy).toHaveBeenCalledWith('[LOG]: test message');
    
    consoleSpy.mockRestore();
  });
});