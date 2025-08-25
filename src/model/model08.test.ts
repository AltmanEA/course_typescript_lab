import { test, expect, vi } from 'vitest';
import { Logger } from './model08';

class MockLogger extends Logger {
  log(message: string): void {
    console.log(message);
  }
}

test('MockLogger.log should log a message', () => {
  const spy = vi.spyOn(console, 'log');
  const logger = new MockLogger();
  logger.log('Test message');
  expect(spy).toHaveBeenCalledWith('Test message');
});

test('MockLogger.error should log a message with "ERROR: " prefix', () => {
  const spy = vi.spyOn(console, 'log');
  const logger = new MockLogger();
  logger.error('Test error');
  expect(spy).toHaveBeenCalledWith('ERROR: Test error');
});
