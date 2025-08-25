import { test, expect, describe, vi } from 'vitest';
import { Logger, SafeLogger } from './model16';

describe('LSP Task 4: Postconditions', () => {
  test('SafeLogger should not throw for empty messages', () => {
    const logger = new SafeLogger();
    expect(() => logger.log("")).not.toThrow();
    expect(() => logger.log(null as any)).not.toThrow();
  });

  test('SafeLogger should still log valid messages', () => {
    const logger = new SafeLogger();
    const consoleSpy = vi.spyOn(console, 'log');
    logger.log("test message");
    expect(consoleSpy).toHaveBeenCalledWith("test message");
    consoleSpy.mockRestore();
  });

  test('SafeLogger should be substitutable for Logger', () => {
    const logger: Logger = new SafeLogger();
    expect(() => logger.log("")).not.toThrow();
  });

  
  test('SafeLogger should not log empty messages', () => {
    const logger = new SafeLogger();
    const consoleSpy = vi.spyOn(console, 'log');
    logger.log("");
    expect(consoleSpy).not.toHaveBeenCalled();
    consoleSpy.mockRestore();
  });
});