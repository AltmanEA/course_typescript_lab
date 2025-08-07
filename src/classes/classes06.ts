/* 
	Напишите класс Counter, содержащий статическое свойство count, которое увеличивается на единицу при каждом создании нового экземпляра класса. Реализуйте статический метод getCurrentCount, возвращающий текущее значение счётчика.
*/

export class Counter {
    static count = 0;
    constructor() {
        Counter.count++;
    }
    static getCurrentCount() {

    }
}
