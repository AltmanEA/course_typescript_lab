import { describe, expect, test } from 'vitest';
import { Timestamped, Document } from './model19';

describe('Mixin Task 2: Timestamped', () => {
  test('should add timestamp property and getTimestamp method', () => {
    const TimestampedDocument = Timestamped(Document);
    const doc = new TimestampedDocument();
    
    expect(doc).toHaveProperty('timestamp');
    expect(doc.timestamp).toBeInstanceOf(Date);
    expect(doc).toHaveProperty('getTimestamp');
    expect(typeof doc.getTimestamp).toBe('function');
  });

  test('getTimestamp should return ISO string', () => {
    const TimestampedDocument = Timestamped(Document);
    const doc = new TimestampedDocument();
    
    const timestamp = doc.getTimestamp();
    expect(timestamp).toMatch(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}/);
  });
});