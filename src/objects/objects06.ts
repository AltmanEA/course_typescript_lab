/* 	
	В объекте user создать метод equal, который будет проверять структурное равенство объектов. При передачи аргументов метод должен возвращать копию объекта с новыми значениями свойств. 
*/

export type User = {
  name: string;
  age: number;
  role: string[];
  equal: (other: User) => boolean;
};

export const user: User = {
  name: "John",
  age: 30,
  role: ["admin", "user"],
  equal(other: User) {	
	return true
  },
};
