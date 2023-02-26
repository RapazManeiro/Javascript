class ContaBancaria {
    constructor(nome, saldoInicial) {
      this.nome = nome;
      this.saldo = saldoInicial;
    }
  
    depositar(valor) {
      this.saldo += valor;
    }
  
    sacar(valor) {
      if (valor > this.saldo) {
        console.log('Saldo insuficiente');
        return;
      }
  
      this.saldo -= valor;
    }
  }
  
  const conta1 = new ContaBancaria('João', 1000);
  const conta2 = new ContaBancaria('Maria', 500);
  
  console.log(conta1);
  console.log(conta2);
  
  conta1.depositar(500);
  conta2.sacar(300);
  
  console.log(conta1);
  console.log(conta2);
  