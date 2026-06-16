const prompt = require("prompt-sync")();
let cidades = [];
for (let i = 0; i < 5; i++) {
    cidades[i] = prompt("uma cidade:");
}
let novaCidade = prompt("mais uma:");
for (let i = 5; i > 0; i--) {
    cidades[i] = cidades[i - 1];
}
cidades[0] = novaCidade;
console.log(cidades);