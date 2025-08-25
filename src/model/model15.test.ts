import { test, expect, describe } from 'vitest';
import { Account, PremiumAccount } from './model15';

describe('LSP Task 3: Preconditions', () => {
  test('PremiumAccount should not strengthen preconditions', () => {
    const account = new PremiumAccount();
    expect(() => account.withdraw(100)).not.toThrow();
  });

  test('PremiumAccount should throw for invalid amounts like base class', () => {
    const account = new PremiumAccount();
    expect(() => account.withdraw(-50)).toThrow("Amount must be positive");
    expect(() => account.withdraw(0)).toThrow("Amount must be positive");
  });

  test('PremiumAccount should be substitutable for Account', () => {
    const account: Account = new PremiumAccount();
    expect(() => account.withdraw(100)).not.toThrow();
  });
});