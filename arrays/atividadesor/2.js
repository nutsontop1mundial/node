const prompt = require("prompt-sync")();

let numeros = [];
let pares = 0;

for (let i = 1; i <= 10; i++) {
    numeros.push(Number(prompt("Digite o número : " + i)));
}

for (let numero of numeros) {
    if (numero % 2 === 0) {
        pares++;
    }
}

console.log("Quantidade de números pares: " + pares);