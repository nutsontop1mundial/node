const prompt = require("prompt-sync")();
let filmes = [];
for (let i = 0; i < 5; i++) {
    filmes[i] = prompt("Digite um filme:");
}
let posicao = Number(prompt("Alterar:"));
let novoFilme = prompt("novo nome:");
filmes[posicao] = novoFilme;
console.log(filmes);