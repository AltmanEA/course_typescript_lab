/* 
	Создать класс Dog, который наследует от Animal и реализует метод bark() (выводит "Woof!").
*/

export class Animal {
  name: string;
  
  constructor(name: string) {
    this.name = name;
  }
  
  makeSound(): void {
    console.log("Some generic sound");
  }
}

export class Dog 
