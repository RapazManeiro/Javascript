class Pessoa {
    constructor(nome, idade) {
      this.nome = nome;
      this.idade = idade;
    }
  }
  
  const pessoa1 = new Pessoa('João', 30);

/* MANEIRA ANTIGA

function Pessoa(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }
  
  const pessoa1 = new Pessoa('João', 30);

*/