/* 	
	В объекте user создать метод equal, который будет проверять структурное равенство объектов. При передачи аргументов метод должен возвращать копию объекта с новыми значениями свойств. 
*/

export type Address = {
  street: string;
  building: number;
  equal: (other: Address) => boolean;
};

export type User = {
  name: string;
  age: number;
  address: Address;
  equal: (other: User) => boolean;
};

const address = {
  street: "Main Street",
  building: 123,
  equal(other: Address) {
	return (
		this.street === other.street &&
		this.building === other.building
	);
  },
};

export const user: User = {
  name: "John",
  age: 30,
  address: address,
  equal(other: User) {
	  return true;
  },
};
