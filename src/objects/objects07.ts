/* 
	Реализовать функцию maxOf<T extends Comparable>(a: T[]): T, возвращающую максимальное значение в массиве.
*/

export type Comparable = {
	greaterThan: (other: Comparable) => boolean
}

export function maxOf<T extends Comparable>(a: T[]): T {
	return a[0];
	
}