const prompt = require("prompt-sync")();
let produtos = [];
let opcao;

for(let i = 0; i<3, i++)

produtos.push(prompt("Informe um produto:"));

console.log("Menu")
console.log("1 - Mostrar todos produtos");
console.log("2 - Adicionar novo produto");
opcao = Number(prompt("Informe a opção: "))
function mostrarProdutos(){
     for(let i =0; i<produtos.length; i++)
           console.log(produto[i]);
}
function adicionarProduto(){
     produtos.push(prompt("Informe um novo produto: "))
}
if(opcao === 1){
  mostrarProdutos();
        
}
else if(opcao === 2){
    adicionarProduto();
    mostrarProdutos();""
}