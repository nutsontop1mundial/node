const prompt = require("prompt-sync")();
let produtos = [];
for (let i = 0; i < 5; i++) {
    produtos[i] = prompt("Digite um produto:");
}
produtos[4] = "";
console.log(produtos);