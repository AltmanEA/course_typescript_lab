/* 	
	В объекте user создать метод copy, который будет возвращать копию объекта. При передачи аргументов метод должен возвращать копию объекта с новыми значениями свойств.
*/

export type User = {
  name: string;
  age: number;
  copy: (name?: string, age?: number) => User
};

export const user: User = {
  name: "John",
  age: 30,
  copy(name?: string, age?: number) {
	return this
  },
};
