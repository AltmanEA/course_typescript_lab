/* 	
	Добавьте свойство timestamp, в котором будет храниться время в момент создания документа в формате Date и метод getTimestamp, которые возвращают текущее время в ISO-8601 формате (с помощью метода toISOString класса Date). 
*/

export function Timestamped<TBase extends new (...args: any[]) => any>(Base: TBase) {
  return class extends Base {

  };
}

export class Document {
  content: string = "";
}
