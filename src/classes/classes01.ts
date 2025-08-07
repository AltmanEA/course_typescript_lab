/* 
	Напишите конструктор класса Person, который принимает три аргумента: имя, фамилию и возраст. Используйте модульность доступа (модификаторы доступа public, private) для соответствующих полей.
*/

export class Person {
    firstName: string;
    lastName: string;
    private age: number;

    constructor(firstName: string, lastName: string, age: number) {
        
    }

    getFullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }
}
