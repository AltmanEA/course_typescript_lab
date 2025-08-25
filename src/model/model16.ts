/* 
	Класс SafeLogger может ослабить постусловия - при пустом сообщении не выбрасывать исключение, а просто не логировать.
*/

export class Logger {
  log(message: string): void {
    if (!message) throw new Error("Message cannot be empty");
    console.log(message);
  }
}

export class SafeLogger extends Logger {
  override log(message: string): void {
     
    console.log(message);
  }
}
