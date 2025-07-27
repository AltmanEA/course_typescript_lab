/* 
	Реализовать функцию updateField, которая принимает объект и ключ (имя поля) и возвращает новый объект с измененным значением поля. Если поля с таким именем нет, то его нужно добавить.
*/


export function updateField<T, K extends keyof T>(obj: T, field: K, value: T[K]): T {
	return obj;
}

