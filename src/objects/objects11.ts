/* 
	Функция add должна добавлять переданное значение к предыдущему значению, но она работает некорректно. Почему? Исправьте ее.
*/

const calculator = {
    previousValue: 0,
    add(value: number) {
        return this.previousValue += value;
    }
};

export function add(value: number) {
	const adder = calculator.add;
	return adder(value); 	
}
