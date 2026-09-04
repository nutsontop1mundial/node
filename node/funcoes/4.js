const prompt = require("prompt-sync")();
function verificarIdade(){
    if(n1 => 18){
        return "Voce é maior de idade"
    }
    else{
        return "Voce é menor de idade"
    }
}
let idade = Number(prompt("Digite sua idade: "));

console.log(verificarIdade(idade));