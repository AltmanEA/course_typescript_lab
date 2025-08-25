/* 
	Создайте примесь с методом log, которая выводит в консоль сообщение в формате "[LOG]: <сообщение>"
*/



export function Loggable<TBase extends new (...args: any[]) => any>(Base: TBase) {
  return class extends Base {

  };
}

export class User {
  name: string = '';
}

export const LoggableUser = Loggable(User);