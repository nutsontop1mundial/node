const prompt = require("prompt-sync")();

let numeros = [];
let numero;
let i;
for(i=0;i<6;i++){
    numeros[i] = Number(prompt("Informe o número: "));
}
if(numeros[i]>0){
    console.log(numeros[i]);
}