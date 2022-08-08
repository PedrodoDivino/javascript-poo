

export class checkingAccount {
    agency;
    balance = 0;
    drawOut(value) {
      if (this._balance >= value) {
        this._balance -= value;
        return  value;
        
      }
    }
    deposit(value) {
      if (this.balance >= 0) {
        this._balance += value;
        return value;
     
      }
    }
  }