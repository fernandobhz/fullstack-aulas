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
  const atores = filme.atores.join(", ");

  const textoDescritivoDoFilme = `
    Filme:
    ------
    Código: ${filme.codigo},
    Título: ${filme.titulo} ${filme.duracao} horas(s),
    Atores: ${atores},
    Lancado em ${filme.anoDeLancamento},
    Em cartaz: ${filme.emCartaz ? "Sim" : "Não"}

  `;

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

    if (filme.emCartaz) {
      imprimirFilmePelaPosicao(idx);
    }
  }
};

function buscarFilme(posicaoDoFilmeNaArray, callback) {
  const filme = catalogo[posicaoDoFilmeNaArray];
  setTimeout(callback, 5000, filme)
}


function alterarStatusEmCartaz(posicaoDoFilmeNaArray) {  
  const filme = buscarFilme(posicaoDoFilmeNaArray, function(filme) {
    const invertendoValorEmCartaz = !filme.emCartaz;
    filme.emCartaz = invertendoValorEmCartaz;
  });
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
