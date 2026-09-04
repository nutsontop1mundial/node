const prompt = require("prompt-sync")();

function numero(n1,n2){
   return n1 / n2;
}
let n1 = Number(prompt("Digite o número: "));
let n2 = Number(prompt("Digite o número: "));

console.log(numero(n1, n2));