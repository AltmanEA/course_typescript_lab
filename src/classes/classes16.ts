/* 
	Реализовать класс Complex (комплексное число) по описанию типа ComplexType (включить конструктор и метод sum).
*/

type ComplexType = { 
	real: number; 
	imag: number;
	sum: (other: ComplexType) => ComplexType
};

export class Complex implements ComplexType {

}

