/* 	Реализовать параметризованный класс для хранения коллекции элементов. Класс должен содержит методы add, remove и contains. На параметр класса накладывается ограничение, объекты класса должны содержать метод equals другого объекта класса. Нужно реализовать метод count, который подсчитывает количество элементов в коллекции, равных заданному.
*/

export class Collection<T extends { equals(other: T): boolean }> {
  private items: T[] = [];

  constructor(...items: T[]) {
    this.items.push(...items);
  }
  
  add(item: T): void {
    this.items.push(item);
  }

  remove(item: T): void {
    this.items = this.items.filter((i) => !i.equals(item));
  }

  contains(item: T): boolean {
    return this.items.some((i) => i.equals(item));
  }

  count(item: T): number {
    
  }
}
