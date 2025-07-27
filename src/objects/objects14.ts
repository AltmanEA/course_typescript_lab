/* 
	Метод getInnerFunction объекта objectWithInnerFunction должен возвращать функцию, которая возвращает значение свойства value. Однако он работает некорректно. Почему? Исправьте ошибку.
*/

export const objectWithInnerFunction = {
    value: 10,
    getInnerFunction() {
        return function() {
            return this.value; 
        };
    }
};
