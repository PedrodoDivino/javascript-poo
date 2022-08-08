import {Client} from './Client.js';
import {checkingAccount} from './checkingAccount.js';

const client1 = new Client();

client1.name = "Ricardo";
client1.Cpf = 1233454545;


const checkingAccountRicardo = new checkingAccount();

checkingAccountRicardo._balance = 150;
checkingAccountRicardo.agency = 1001;

const valuedrawOut = checkingAccountRicardo.drawOut(100);

console.log(valuedrawOut);
