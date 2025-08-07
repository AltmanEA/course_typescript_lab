/* 
	Дан параметризованный класс для хранения коллекции элементов. Класс должен содержит методы add, remove и contains. На параметр класса накладывается ограничение, объекты класса должны содержать метод isGreaterThan другого объекта класса. Реализуйте метод getGreatest, возращающий наибольший элемент коллекции.
*/

export class Collection<T extends { isGreaterThan(other: T): boolean }> {
    private items: T[] = [];

	
	constructor(...items: T[]) {
		this.items.push(...items);
	}

    public add(item: T): void {
        this.items.push(item);
    }

    public remove(item: T): void {
        const index = this.items.findIndex(i => i.isGreaterThan(item));
        if (index > -1) {
            this.items.splice(index, 1);
        }
    }

    public contains(item: T): boolean {
        return this.items.some(i => i.isGreaterThan(item));
    }

    public getGreatest(): T | undefined {
        let greatest = this.items[0];
        for (let i = 1; i < this.items.length; i++) {
            if (this.items[i].isGreaterThan(greatest)) {
                greatest = this.items[i];
            }
        }
        return greatest;
    }
}


