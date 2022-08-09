import {Client} from './Client.js';
import {CheckingAccount} from './checkingAccount.js';

const client1 = new Client('Ricardo', 213456789);

const client2 = new Client('Alice' ,987654321);

const checkingAccountRicardo = new CheckingAccount (client1,1001);

checkingAccountRicardo.deposit(500);

const acount2 = new CheckingAccount(102, client2);

acount2.client= client1;
acount2.agency = 102;


console.log(CheckingAccount.acountNumber);