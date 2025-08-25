/* 
  Реализуйте оба интерфейса в классе Duck. Метод swim должен выводить в консоль "Duck is swimming", а метод dive должен выводить в консоль "Duck is diving".
*/

interface Swimmable {
  swim(): void;
}

interface Diveable {
  dive(): void;
}

export class Duck implements Swimmable, Diveable {

}
