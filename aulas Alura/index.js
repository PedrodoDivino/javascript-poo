import {Client} from './Client.js';
import {CheckingAccount} from './checkingAccount.js';

const client1 = new Client();
client1.name = "Ricardo";
client1.Cpf = 1233454545;

const client2 = new Client();
client2.name = "Maria";
client2.Cpf = 98765211;


const checkingAccountRicardo = new CheckingAccount();
checkingAccountRicardo.agency = 1001;
checkingAccountRicardo.client = client1;
checkingAccountRicardo.deposit(500);

const acount2 = new CheckingAccount()
acount2.agency = 102;
acount2.client = client2;

checkingAccountRicardo.trasnfer(200, acount2);

console.log(client2);
