const prompt = require("prompt-sync")();
function determinarIdade(n){
    if(n<18){
       console.log("Voce é menor de idade!")
    }
    else if(n>=18){
        console.log("Voce e maior de idade!")
    }
    else{
        console.log("Invalido!")
    }
}
module.exports = {determinarIdade};
