// 4 - Coloque suas habilidade como entrada, que elas seram colocadas no X do string

let string = "Trybe x aqui!";

const skillsX = (e) => {
  let array = string.split('x');
  let troca = '';
  for (itens of array) { // percorre array e roda o ternario.: Condicao ? true : false
    itens === array[array.length - 1] ? troca += `${itens}` : troca += `${itens}${e}`;
  } // se for o utimo item só adiciona o item, senao concatena.
  return troca;
}

console.log(skillsX('CSS HTML Calmo JavaScript Bootstrap'));