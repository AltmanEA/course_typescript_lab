/* 
	Метод save класса UserDatabase должен принимать более широкий тип параметров. Метод save должен сохранять данные любого типа и выводить в консоль сообщение "Saving any data".
*/


export class Database {
  save(data: object): void {
    console.log("Saving object");
  }
}

export class UserDatabase extends Database {

}