function euSouPatraoMeuDia() {
    consertarPneu([], continuarDepoisDoPneu);
}

function continuarDepoisDoPneu(resultadoPneu) {
    pedirComidaIFood("pastel", continuarDepoisDaComida);
}

function continuarDepoisDaComida(resultadoComida) {
    fazerCafe('mocha', 10, continuarDepoisDoCafe);
}

function continuarDepoisDoCafe(resultadoCafe) {
    notificarQuandoOFormularioForSalvo(function(resultadoNotificar) {
        enviarRelatorioDoDia({
            resultadoPneu,
            resultadoComida,
            resultadoCafe,
            resultadoNotificar
        });
    })
}