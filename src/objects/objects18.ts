/* 
	Реализовать метод uppercaseProfileNames в объекте user, который возвращает новый объект, такого же типа как и исходный, но со значением name в верхнем регистре.
*/

export const user = {
    profile: { name: 'Alice', age: 30 },
    uppercaseProfileNames() {
        return this;
    }
};