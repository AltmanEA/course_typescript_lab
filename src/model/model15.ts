/* 
	Класс PremiumAccount не должен изменять предусловия на параметры метода withdraw.
*/

export class Account {
  withdraw(amount: number): void {
    if (amount <= 0) throw new Error("Amount must be positive");
    console.log(`Withdrawing ${amount}`);
  }
}


export class PremiumAccount extends Account {
  override withdraw(amount: number): void {
    
    console.log(`Premium withdrawal: ${amount}`);
  }
}
