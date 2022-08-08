class Client {
  name;
  cpf;
}

class checkingAccount {
  agency;
  #balance = 0;
  drawOut(value) {
    if (this._balance >= value) {
      this._balance -= value;
    }
  }
  deposit(value) {
    if (this.balance >= 0) {
      this._balance += value;
    }
  }
}

client1 = new Client();

client1.name = "Ricardo";
client1.Cpf = 1233454545;


const checkingAccountRicardo = new checkingAccount();

checkingAccountRicardo._balance = 100;
checkingAccountRicardo.agency = 1001;

checkingAccountRicardo.deposit(10);

console.log(checkingAccountRicardo);
