// 4 - Coloque suas habilidade como entrada, que elas seram colocadas no X do string
const skills = ['CSS', 'HTML', 'Calmo', 'JavaScript', 'Bootstrap'];

let string = "Trybe x aqui!";

const skillsX = (e) => {
  let array = string.split('x');
  let troca = '';
  for (itens of array) { // percorre array e roda o ternario.: Condicao ? true : false
    itens === array[array.length - 1] ? troca += `${itens}` : troca += `${itens}${e}`;
  } // se for o utimo item só adiciona o item, senao concatena.
  return troca;
}

console.log(skillsX(skills));

// 4.2 Ordena alfabeticamente

console.log(skillsX(skills.sort()));
// pega a função anterior(array de skills + função sort());