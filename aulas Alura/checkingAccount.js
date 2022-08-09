import { Client } from "./Client.js";

export class CheckingAccount {
  static acountNumber =0;
  agency;
  _client;



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
    acount.city = "Londrina";
    const valueDrawOut = this.drawOut(value);
    acount.deposit(valueDrawOut);
  }
  set client(newValue) {
    if (newValue instanceof Client) {
      this._client = newValue;
    }
  }
  get client() {
    return this._client;
  }

  get balance() {
    return this._balance;
  }
  constructor(client, agency){
    CheckingAccount.acountNumber =+ 1
    this.agency = agency;
    this.client = client;
  }
}
