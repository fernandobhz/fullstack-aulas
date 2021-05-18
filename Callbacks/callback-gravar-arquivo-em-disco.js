function gravarArquivoEmDisco(cb) {
    // operacao de salvar
    cb();
}

gravarArquivoEmDisco(() => {
    console.log(`A funcao executou normalmente`);
});
