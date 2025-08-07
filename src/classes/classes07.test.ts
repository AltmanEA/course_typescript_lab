/* 
  Импортировать из vite функции test и expect.
	Реализовать тесты для класса Logger из файла classes07.ts
*/

import { test, expect } from 'vitest';
import { Logger } from './classes07';

test('Logger should have default log level of INFO', () => {
  expect(Logger['logLevel']).toBe('INFO');
});

test('Logger.setLogLevel should change the log level', () => {
  Logger.setLogLevel('ERROR');
  expect(Logger['logLevel']).toBe('ERROR');
  Logger.setLogLevel('WARNING');
  expect(Logger['logLevel']).toBe('WARNING');
  Logger.setLogLevel('INFO');
  expect(Logger['logLevel']).toBe('INFO'); // Reset to default for other tests
});

test('Logger.logMessage should return message with current log level', () => {
  Logger.setLogLevel('INFO');
  expect(Logger.logMessage('Test message')).toBe('[INFO] Test message');
  
  Logger.setLogLevel('WARNING');
  expect(Logger.logMessage('Test message')).toBe('[WARNING] Test message');

  Logger.setLogLevel('ERROR');
  expect(Logger.logMessage('Test message')).toBe('[ERROR] Test message');
});


