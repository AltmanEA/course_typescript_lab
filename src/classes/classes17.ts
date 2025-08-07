/* 	
	Реализуйте методы moveTo(передвигает нижний левый угол квадрата в указанную координату) и getMaxX (возвращает максимальное значение X координаты правого верхнего угла) класса Square
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

export class Square implements Figure {
  point1: Point;
  point2: Point;
  constructor(point1: Point, point2: Point) {
    if (point1.x > point2.x || point1.y > point2.y) {
      throw new Error("point1 must be the bottom-left corner of the square");
    }
    this.point1 = point1;
    this.point2 = point2;
  }
  moveTo(point: Point) {
	
  }
  getMaxX() {

  }
}
