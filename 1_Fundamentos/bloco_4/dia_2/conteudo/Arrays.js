let tasksList = ['Tomar café', 'Reunião', 'Brincar com o cachorro'];

console.log(tasksList);

// Segundo exemplo
let searchForFirstTask = tasksList[0];
console.log(searchForFirstTask);
// Tomar café

searchForFirstTask = tasksList[tasksList.length -1];
console.log(searchForFirstTask);
// Brincar com o cachorro

// Terceiro exemplo
tasksList.push('Fazer exercícios da Trybe');
console.log(tasksList);

tasksList.pop(); //remove a última tarefa
console.log(tasksList);

let indexOfTask = tasksList.indexOf('Reunião');
console.log(indexOfTask); //1, no caso é o enderenço do 'Reunião' no Array, lembrando que começa no 0

