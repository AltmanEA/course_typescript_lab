import { test, expect, describe, vi } from 'vitest';
import { Database, UserDatabase } from './model14';

describe('LSP Task 2: Parameter compatibility', () => {
  test('UserDatabase should accept wider parameter types', () => {
    const userDb = new UserDatabase();
    expect(() => userDb.save("string")).not.toThrow();
    expect(() => userDb.save(123)).not.toThrow();
    expect(() => userDb.save(null)).not.toThrow();
  });

  test('UserDatabase should be substitutable for Database', () => {
    const db: Database = new UserDatabase();
    expect(() => db.save({ key: 'value' })).not.toThrow();
  });

  
  test('UserDatabase should log "Saving any data" when saving data', () => {
    const spy = vi.spyOn(console, 'log');
    const userDb = new UserDatabase();
    userDb.save({ key: 'value' });
    expect(spy).toHaveBeenCalledWith("Saving any data");
  });
});