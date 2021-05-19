const cineHouse = require("./CineHouse/cinema.js");

function todos() {
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

  console.log("Todos os filmes");
  cineHouse.listarTodosOsFilmes();
  console.log();

  console.log("Filmes em Cartaz");
  cineHouse.listarFilmesEmCartaz();
  console.log();
}

function novo() {
  console.log("Filmes de Longa Duracao");
  cineHouse.listarFilmesDeLongaDuracao();
  console.log();
}

function novo2() {
  console.log("Filmes de Longa Duracao");
  cineHouse.listarFilmesDeLongaDuracao2();
  console.log();
}

function novo3() {
  console.log("Filmes de Longa Duracao");
  cineHouse.listarFilmesDeLongaDuracaoPeloCodigo();
  console.log();
}

if (process.argv[2] == "todos") todos();
if (process.argv[2] == "novo") novo();
if (process.argv[2] == "novo2") novo2();
if (process.argv[2] == "novo3") novo3();
