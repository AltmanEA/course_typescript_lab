import { describe, expect, test } from 'vitest';
import { EnhancedFormData } from './model20';

describe('Mixin Task 3: Multiple mixins', () => {
  test('should apply both Serializable and Validatable mixins', () => {

    const form = new EnhancedFormData();
    
    expect(form).toHaveProperty('serialize');
    expect(form).toHaveProperty('validate');
    expect(typeof form.serialize).toBe('function');
    expect(typeof form.validate).toBe('function');
  });

  test('serialize method should work correctly', () => {
    
    const form = new EnhancedFormData();
    form.fields = { name: 'test', value: 123 };
    
    const serialized = form.serialize();
    expect(serialized).toBe(JSON.stringify({ fields: { name: 'test', value: 123 } }));
  });

  test('validate method should return boolean', () => {
    
    const form = new EnhancedFormData();
    
    expect(form.validate()).toBe(true);
  });
});