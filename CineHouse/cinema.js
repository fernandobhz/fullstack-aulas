const catalogo = require("../database/catalogo.json");
const cinema = "Cine House";

const adicionarFilme = function (
  codigo,
  titulo,
  duracao,
  atores,
  anoDeLancamento,
  emCartaz
) {
  const novoFilme = {
    codigo,
    titulo,
    duracao,
    atores,
    anoDeLancamento,
    emCartaz,
  };

  catalogo.push(novoFilme);
};

function imprimirFilmePelaPosicao(posicaoDoFilmeNaArray) {
  const filme = catalogo[posicaoDoFilmeNaArray];

  // 1: Titanic, duração de 3 hora(s), atores: Kate Winslet, Leonardo DiCaprio, lançado em 1998, em cartaz: [simmm! | naaaão]
  const codigoETitulo = filme.codigo + " " + filme.titulo;
  const duracao = filme.duracao + " horas(s)";
  const atores = "atores: " + filme.atores.join(", ");
  const lancado = "lancado em " + filme.anoDeLancamento;
  const emCartaz = "em cartaz: " + (filme.emCartaz ? "Sim" : "Não");

  const textoDescritivoDoFilme =
    codigoETitulo +
    ", " +
    duracao +
    ", " +
    atores +
    ", " +
    lancado +
    ", " +
    emCartaz;

  console.log(textoDescritivoDoFilme);
}

const listarTodosOsFilmes = () => {
  for (let idx = 0; idx < catalogo.length; idx++) {
    imprimirFilmePelaPosicao(idx);
  }
};

const listarFilmesEmCartaz = () => {
  for (let idx = 0; idx < catalogo.length; idx++) {
    const filme = catalogo[idx];

    if (filme.emCartaz){
      imprimirFilmePelaPosicao(idx);
    }
  }
};

function alterarStatusEmCartaz (posicaoDoFilmeNaArray){
  const filme = catalogo[posicaoDoFilmeNaArray];
  const invertendoValorEmCartaz = !filme.emCartaz;
  filme.emCartaz = invertendoValorEmCartaz;
}

module.exports = {
  cinema,
  catalogo,
  adicionarFilme,
  imprimirFilmePelaPosicao,
  listarTodosOsFilmes,
  listarFilmesEmCartaz,
  alterarStatusEmCartaz,
};
