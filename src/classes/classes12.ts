/* 
	Дан параметризованный класс Pair, хранящий пару элементов одного и того же типа. В классе есть конструктор, метод установки и чтения каждого элемента. Реализуйте в классе метод swap, который поменяет значения элементов местами.
*/

export class Pair<T> {
  private first: T;
  private second: T;

  constructor(first: T, second: T) {
    this.first = first;
    this.second = second;
  }

  public getFirst(): T {
    return this.first;
  }

  public getSecond(): T {
    return this.second;
  }

  public setFirst(first: T): void {
    this.first = first;
  }

  public setSecond(second: T): void {
    this.second = second;
  }

  public swap(): void {
    
  }
}

