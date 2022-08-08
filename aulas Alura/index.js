

class Client {

    name;
    cpf;
}

class checkingAccount {
    agency;
    balance;
drawOut(value){
 if (this.balance >= value) {
    this.balance -= value;
 } 
}

}


client1 = new Client();

const client2 = new Client();


 client1.name = 'Ricardo';

client1.Cpf = 1233454545;


const client2name = 'Alice';

const client2Cpf = 98764321;

const checkingAccountRicardo = new checkingAccount();

checkingAccountRicardo.balance = 100;
checkingAccountRicardo.agency = 1001;


checkingAccountRicardo.drawOut(200)

console.log(checkingAccountRicardo.balance)

