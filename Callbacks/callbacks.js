const consertarUmPneu = pneu => {
    pneu.consertado = true
    return pneu;
}

function consertarPneu(pneus, callback) {
    pneus.map(pneu => consertarUmPneu(pneu));
    const preco = pneus.length;
    const contaDoCliente = {preco, impostos: 0.1};
    callback(contaDoCliente);
}

function pedirComidaIFood(comida, callback) {
    callback({preco: 50});    
}

function fazerCafe(tipoCafe, quantidade, cb) {
    if (tipoCafe === 'expresso' && quantidade === 1) {
        cb({preco: 5});
    } else {
        cb({preco: 1});
    }
}

function notificarQuandoOFormularioForSalvo(cb) {
    cb({status: 200});
}

// chamar esta funcao com o resultado de todos os callbacks
function enviarRelatorioDoDia(relatorio) {
    const resultadoPneu = relatorio.resultadoPneu;
    const resultadoComida = relatorio.resultadoComida;    
    const resultadoCafe = relatorio.resultadoCafe;
    const resultadoNotificar = relatorio.resultadoNotificar;

    console.log(`O preco de consertar o pneu foi de ${resultadoPneu.preco}`);
    console.log(`O preco da comida foi de ${resultadoComida.preco}`);
    console.log(`O preco do cafe foi de ${resultadoCafe.preco}`);
    console.log(`O status de retorno foi: ${resultadoNotificar.status}`);
}

function euSouPatraoMeuDia() {
    consertarPneu([], function(resultadoPneu) {        
        pedirComidaIFood("pastel", function(resultadoComida) {
            fazerCafe('mocha', 10, function(resultadoCafe) {
                notificarQuandoOFormularioForSalvo(function(resultadoNotificar) {
                    enviarRelatorioDoDia({ // ultima
                        resultadoPneu,
                        resultadoComida,
                        resultadoCafe,
                        resultadoNotificar
                    });
                })
            });
        });
    });
}

function euSouPatraoMeuDia() {
    chamarVideo(function(resultadoVideo) {        
        
    });

    informarNome("pastel", function(resultadoComida) {
    });
}

euSouPatraoMeuDia()
