/* 
	Функция add должна добавлять переданное значение к предыдущему значению, но она работает некорректно. Почему? Исправьте ошибку.
*/

const calculator = {
    previousValue: 0,
    add: (value: number) => {
        return this.previousValue += value;
    }
};

export function add(value: number) {
	return calculator.add(value);
}
