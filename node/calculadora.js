const{soma, divisao, multiplicacao, subtracao } = require("./calculadorafunc")();

let a;
let b;
let opcao;
let resultado;
console.log("----Calculadora----");
console.log("Menu: Soma; Multiplicacao; Subtracao; Divisao")
opcao = prompt("Digite a sua opção:");
Numero = Numero(prompt("Digite um número: "));
Numero2 = Numero(prompt("Digite um número: "));

if(opcao === "1" || opcao === "+" || opcao.toLowerCase === "soma"){
    console.log(soma(Numero, Numero2, resultado));
}
else if(opcao === 2 || opcao === "*" || opcao.toLowerCase === "multiplicacao"){
    console.log(multiplicacao(Numero, Numero2, resultado));
} 
else if(opcao === 3 || opcao === "-" || opcao.toLowerCase === "subtracao"){
    console.log(subtracao(Numero, Numero2, resultado));
}
else if(opcao === 4 || opcao === "/" || opcao.toLowerCase === "divisao"){
    console.log(divisao(Numero, Numero2, resultado));
}
else{console.log("Opção invalida")};
console.log(resultado);
