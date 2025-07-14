/* 
	Реализуйте функцию diagonalSum(matrix), которая вычисляет сумму элементов главной диагонали матрицы.
*/

export function diagonalSum(matrix) {
	const n = matrix.length;
	let sum = 0;
	
	for (let i = 0; i < n; i++) {
		sum += matrix[i][i];
	}
	
	return sum;
}
