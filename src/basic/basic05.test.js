import { test, expect } from 'vitest'
import { grade_student } from './basic05'

test('grade_student should return correct grade', () => {
  expect(grade_student(0)).toBe('неудовлетворительно')
  expect(grade_student(59)).toBe('неудовлетворительно')
  expect(grade_student(60)).toBe('удовлетворительно')
  expect(grade_student(74)).toBe('удовлетворительно')
  expect(grade_student(75)).toBe('хорошо')
  expect(grade_student(89)).toBe('хорошо')
  expect(grade_student(90)).toBe('отлично')
  expect(grade_student(100)).toBe('отлично')
})
