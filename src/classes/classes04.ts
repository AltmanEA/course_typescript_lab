/* 
	Создать класс Point, который принимает координаты точки либо отдельно (по оси X и Y), либо сразу массивом координат [X,Y,Z].
*/

export class Point {
    coords: number[];
    constructor(x: number, y: number);   // Конструктор с двумя числами
    constructor(coords: [number, number]);       // Конструктор с массивом чисел
    constructor(...args: any[]) {
		
    }
}
