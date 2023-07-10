const verificaNumero = (numApostado, numAleatorio) => numApostado === numAleatorio;

const sortLoteria = (numApostado, callback) => {
    const numAleatorio = Math.floor((Math.random() * 5) + 1);
    return callback(numApostado, numAleatorio) ? 'Parabéns, você ganhou' : 'Tente novamente';
}

console.log(sortLoteria(2, verificaNumero));
