/* 	Создайте класс, в котором хранится информация о занятии в расписании (день недели и номер пары). Для хранения дня недели определен соответствующий тип, объекты которого могут принимать одной из 6 значений (без воскресенья). Номер пары храниться в поле типа number, корректность (от 1 до 7) установки контролируется с помощью метода доступа, при некорректном значении используется стандартное значение 0.
*/

type WeekDay =
  | "Monday"
  | "Tuesday"
  | "Wednesday"
  | "Thursday"
  | "Friday"
  | "Saturday";

export class Lesson {
  day: WeekDay;
  private _number: number = 0;

  constructor(day: WeekDay, number: number) {
    this.day = day;
    this.number = number;
  }

  set number(n: number) {

  }
  get number(): number {

  }
}
