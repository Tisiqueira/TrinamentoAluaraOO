import {Cliente} from "./Cliente.js";
import {ContaCorrente} from "./ContaCorrente.js";


const Cliente1 = new Cliente("Joyce", 229);
const Cliente2 = new Cliente("Tiago", 223);
console.log(Cliente1, Cliente2);

// const ContaCorrente1 = new ContaCorrente();
// ContaCorrente1._cliente = Cliente1;
// ContaCorrente1.agencia = 10;
//ContaCorrente1._cliente = "Laura"; //Consigo manipular o _cliente - inseri o nome Laura
//console.log(ContaCorrente1);//impressão do nome
//console.log(Cliente1);//Objeto continua como o original - pois o objeto está intacto

const ContaCorrente1 = new ContaCorrente(10, Cliente1);
const ContaCorrente2 = new ContaCorrente(11, Cliente2);

ContaCorrente1._saldo = 1000;
ContaCorrente1.sacar(500);
console.log(ContaCorrente1);

ContaCorrente1.depositar(200);
console.log(ContaCorrente1._saldo);

ContaCorrente1.transferir(100, ContaCorrente2);
console.log(ContaCorrente2);

console.log(ContaCorrente.totalDeContas);
