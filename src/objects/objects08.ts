/* 
	Реализовать функцию sum<T extends Summable>(a: T[]): T, возвращающую сумму элементов в массиве. Допускается использовать приведение типа Summable к T
*/

export type Summable = {
	sum: (other: Summable) => Summable
}

export function sum<T extends Summable>(a: T[]): T {
	return a[0];
}
