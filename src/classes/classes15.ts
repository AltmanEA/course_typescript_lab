/* 
	Дан класса Student, содержащий статическое свойство count и  статический метод info(), который возвращает строку "Всего count студентов". Заменить метод info() на геттер.
*/


export class Student {
  static count = 0;
  first_name: string;
  last_name: string;
  constructor(first_name: string, last_name: string) {
	this.first_name = first_name;
	this.last_name = last_name;
    Student.count++;
  }
  static info(): string {
    return `Всего ${Student.count} студентов`;
  }
}