/* 
	Объявите в класса Shape абстрактное свойство area:number. Реализуйте абстрактное свойство area в классе Circle. Формула для вычисления площади круга: PI * radius * radius
*/

export abstract class Shape {
  abstract area: number;
  
  display(): void {
    console.log(`Area: ${this.area}`);
  }
}

export class Circle extends Shape {
  radius: number;
  
  constructor(radius: number) {
    super();
    this.radius = radius;
  }
  
}

