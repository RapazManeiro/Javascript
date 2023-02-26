function Livro(titulo, autor, ano) {
    this.titulo = titulo;
    this.autor = autor;
    this.ano = ano;
    this.lido = false;
  
    this.marcarComoLido = function() {
      this.lido = true;
    }
  }
  
  const livro1 = new Livro('O Hobbit', 'J.R.R. Tolkien', 1937);
  const livro2 = new Livro('A Guerra dos Tronos', 'George R.R. Martin', 1996);
  
  console.log(livro1);
  console.log(livro2);
  
  livro1.marcarComoLido();
  
  console.log(livro1);