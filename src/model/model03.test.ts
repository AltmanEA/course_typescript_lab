import { test, expect } from 'vitest';
import { Employee } from './model03';

test('Employee constructor should initialize with name and position', () => {
  const employee = new Employee('John Doe', 'Software Engineer');
  expect(employee.name).toBe('John Doe');
  expect(employee.position).toBe('Software Engineer');
});
