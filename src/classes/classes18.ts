/* 
	Реализуйте конструктор и етоды moveTo(передвигает нижний левый угол квадрата в указанную координату) и getMaxX (возвращает максимальное значение X координаты правого верхнего угла) класса Circle.
*/


export class Point {
  x: number;
  y: number;
  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
}

type Figure = {
  moveTo: (point: Point) => void;
  getMaxX: () => number;
};

export class Circle implements Figure {
  private center: Point;
  private radius: number;

  constructor(x: number, y: number, radius: number) {
  }

  moveTo(point: Point): void {

  }

  getMaxX(): number {

  }
}
