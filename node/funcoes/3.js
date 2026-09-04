const prompt = require("prompt-sync")();

function media(n1, n2, n3) {
    return (n1 + n2 + n3) / 3;
}

let numero1 = Number(prompt("Digite a primeira nota: "));
let numero2 = Number(prompt("Digite a segunda nota: "));
let numero3 = Number(prompt("Digite a terceira nota: "));

console.log(media(numero1, numero2, numero3));
