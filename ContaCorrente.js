export class ContaCorrente {
    static totalDeContas = 0;
    agencia;
    _cliente;

    _saldo = 0;

    constructor (agencia, cliente){
        this.agencia = agencia
        this._cliente = cliente;
        ContaCorrente.totalDeContas += 1;
    }
    set cliente(novoValor){
        if(novoValor instanceof Cliente){
            this._cliente = novoValor;
        }
    }
    get cliente (){
        return this._cliente;
    }

    get saldo(){
        return this._saldo;
    }

    sacar(valor){
        if(this.saldo >= valor){
            this._saldo -= valor;
            return valor;
        }        
    }

    depositar(valor){
        this._saldo += valor;
    }

    transferir(valor, conta){
        if(this.saldo >= valor){//Condicional add para não ocorre NaN se o valor for maios que o saldo
            const valorSacado = this.sacar(valor);
            conta.depositar(valorSacado);
        }
    }
   
}