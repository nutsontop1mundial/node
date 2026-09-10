const prompt = require("prompt-sync")();

function soma(Numero, Numero2){
    resultado = Numero + Numero2;
    return resultado;
}
function subtracao(Numero, Numero2){
     resultado = Numero - Numero2;
    return resultado;
}
function divisao(Numero, Numero2){
     resultado = Numero / Numero2;
    return resultado;
}
function multiplicacao(Numero, Numero2){
     resultado = Numero * Numero2;
    return resultado;
}
module.exports = {
    soma,
    subtracao,
    divisao,
    multiplicacao,
}