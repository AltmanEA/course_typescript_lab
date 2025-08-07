/* 	
	Реализовать конструктор класса Student, который принимает имя, возраст и группу.
*/

class Person {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

export class Student {
	person: Person;
	group: string;
	constructor(name: string, age: number, group: string) {

	}
}
