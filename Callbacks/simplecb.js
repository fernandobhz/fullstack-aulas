
function consertarPneu(cb) {
    cb({
        preco: 10
    });
}

consertarPneu(resultado => {
    console.log(resultado)
})
