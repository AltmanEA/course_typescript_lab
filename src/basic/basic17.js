/* 
	Напишите функцию remove_duplicates(arr), удаляющую дублирующиеся значения из массива, сохраняя порядок остальных элементов.
	Подсказка: можно использовать функцию includes.
*/

export function remove_duplicates(arr) {
    const unique = [];

    for (const item of arr) {
        if (!unique.includes(item)) {
            unique.push(item);
        }
    }

    return unique;
}
