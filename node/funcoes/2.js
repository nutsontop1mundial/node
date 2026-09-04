const prompt = require("prompt-sync")();

function dobro(numero) {
    return numero * 2;
}

let numero = Number(prompt("Digite um número: "));

console.log(dobro(numero));
