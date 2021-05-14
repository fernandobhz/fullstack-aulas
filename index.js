const cineHouse = require("./CineHouse/cinema.js");

cineHouse.adicionarFilme(
  3,
  "Matrix",
  3,
  ["Keanu Reeves", "Laurence Fishburne"],
  1999,
  true
);

const posicaoDesejada = 1;
console.log(`Filme ${posicaoDesejada}`);
cineHouse.imprimirFilmePelaPosicao(posicaoDesejada);
console.log();


console.log(`

  Alterado propriedade em emCartaz do filme na posição ${posicaoDesejada}

`);

cineHouse.alterarStatusEmCartaz(posicaoDesejada);
cineHouse.imprimirFilmePelaPosicao(posicaoDesejada);
console.log();

console.log('Todos os filmes');
cineHouse.listarTodosOsFilmes();
console.log();

console.log('Filmes em Cartaz');
cineHouse.listarFilmesEmCartaz();
console.log();
