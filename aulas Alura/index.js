import {Client} from './Client.js';
import {CheckingAccount} from './checkingAccount.js';

const client1 = new Client();
client1.name = "Ricardo";
client1.Cpf = 1233454545;

const checkingAccountRicardo = new CheckingAccount();
checkingAccountRicardo.agency = 1001;
checkingAccountRicardo.client = client1;
checkingAccountRicardo.deposit(500);

const acount2 = new CheckingAccount()
acount2.client = new Client();
acount2.client.name = 'Alice'
acount2.client.Cpf = 12334545
acount2.agency = 102;
let value = 200;
acount2.client = Client;

checkingAccountRicardo.trasnfer(value, acount2);

console.log('value',value,acount2);
