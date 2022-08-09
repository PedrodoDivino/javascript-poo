export class CheckingAccount {
  agency;
  balance = 0;
  drawOut(value) {
    if (this._balance >= value) {
      this._balance -= value;
      return value;
    }
  }
  deposit(value) {
    if (this.balance >= 0) {
      this._balance += value;
      return value;
    }
  }
  trasnfer(value, acount) {
    acount.city = 'Londrina';
    const valueDrawOut = this.drawOut(value);
    acount.deposit(valueDrawOut);

  }
}
