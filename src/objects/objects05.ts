/* 
	В объекте user создать метод copy, который будет возвращать глубокую копию объекта. При передачи аргументов метод должен возвращать копию объекта с новыми значениями свойств. 
*/

export type User = {
  name: string;
  age: number;
  role: string[];
  copy: (name?: string, age?: number, role?: string[]) => User
};

export const user: User = {
  name: "John",
  age: 30,
  role: ["admin", "user"],
  copy(name?: string, age?: number, role?: string[]): User {
    return this;

  },
};
