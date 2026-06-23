const prompt = require("prompt-sync")();

let fila = ["João Paulo", "Michel telo", "Ana Maria Braga", "Zé pilintra", "Julia Souza"];
let opcao = "";

while (opcao !== "1") {
    console.log("\n1-Mostrar | 2-Adicionar fim | 3-Atender | 4-Total | 5-Remover fim | 6-Adidionar inicio | 7-Buscar | 8-Proximo | 9-Ultimo ");
    opcao = prompt("Opção: ");

    if (opcao === "1") console.log(fila);
    if (opcao === "2") fila.push(prompt("Nome: "));
    if (opcao === "3") console.log("Atendido: " + fila.shift());
    if (opcao === "4") console.log("Total: " + fila.length);
    if (opcao === "5") console.log("Removido: " + fila.pop());
    if (opcao === "6") fila.unshift(prompt("Nome: "));
    if (opcao === "7") console.log("Tem na fila?: " + fila.includes(prompt("Nome: ")));
    if (opcao === "8") console.log("Próximo: " + fila[0]);
    if (opcao === "9") console.log("Último: " + fila[fila.length - 1]);
}