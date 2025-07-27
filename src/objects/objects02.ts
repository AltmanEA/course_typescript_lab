/* 	
	В объекте user создать метод equal, который будет проверять равенство объектов. При передачи аргументов метод должен возвращать копию объекта с новыми значениями свойств.
*/

export type User = {
  name: string;
  age: number;
  equal: (other: User) => boolean
};

export const user: User = {
  name: "John",
  age: 30,
  equal(other) {
	return true;
  }
};


