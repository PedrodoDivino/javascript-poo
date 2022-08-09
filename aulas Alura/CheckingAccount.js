export class CheckingAccount {
  client;
  agency;
  _balance = 0;

  drawOut(value) {
    if (this._balance >= value) {
      this._balance -= value;
      return value;
    }
  }
  deposit(value) {
    if (this.balance >= 0) {
      return;
    }
    this._balance += value;
  }
  trasnfer(value, acount) {
    const valueDrawOut = this.drawOut(value);
    acount.deposit(valueDrawOut);
  }
}
