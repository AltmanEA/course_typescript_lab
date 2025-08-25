/* 
	Реализуйте абстрактный метод и вызовите родительский конструктор. Метод makeSound() должен выводить в консоль "Meow!". Конструктор Cat должен принимать имя кота, и записывать его в свойство name с добавлением префикса "Cat " с помощью родительского конструктора.
*/

export abstract class Animal {
  name: string;
  
  constructor(name: string) {
    this.name = name;
  }
  
  abstract makeSound(): void;
}


export class Cat extends Animal {
  constructor(name: string) {
    super(`Cat ${name}`);
  }
  
  makeSound(): void {
    console.log("Meow!");
  }
  
}
