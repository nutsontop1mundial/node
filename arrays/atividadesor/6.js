const prompt = require("prompt-sync")();
let tarefas = [];
for (let i = 0; i < 5; i++) {
    tarefas.push(prompt("uma tarefa:"));
}
tarefas[0] = tarefas[1];
tarefas[1] = tarefas[2];
tarefas[2] = tarefas[3];
tarefas[3] = tarefas[4];
console.log(tarefas);
