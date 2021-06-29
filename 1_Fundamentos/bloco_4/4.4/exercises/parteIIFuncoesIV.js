let listaNomes = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];

function amemIrmao(lista) {
  let maior = lista[0]
  for (let key in lista) {
    if (maior.length < lista[key].length) {
      maior = lista[key];
    }
  }
  return maior;
}

console.log(amemIrmao(listaNomes));