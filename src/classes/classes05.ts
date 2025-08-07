/* 
	Класс Task, позволяющий создать задачу либо простым текстом («Купить хлеб»), либо путем передачи названия и статуса.
*/


export class Task {
    title: string;
    done: boolean;
    constructor(title: string);                  // Только название задачи
    constructor(title: string, done: boolean);   // Название и статус завершения
    constructor(title: string, done?: boolean) {

    }
}