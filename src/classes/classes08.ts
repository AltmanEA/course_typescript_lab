/*   
  Дан исходный класса Animal. Необходимо добавить статическое свойство animalCount, которое учитывает количество созданных животных, и статический метод getAnimalCount, возвращающий это значение.
*/

export class Animal {
  
  name: string;
  species: string;
  constructor(name: string, species: string) {
    this.name = name;
    this.species = species;
    
  }
  greet() {
    console.log(
      `Привет, меня зовут ${this.name}! Я представитель вида ${this.species}.`
    );
  }
  static getAnimalCount() {
    
  }
}


