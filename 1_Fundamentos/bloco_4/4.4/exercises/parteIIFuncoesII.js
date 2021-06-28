let lista = [2, 3, 6, 7, 10, 1];

function disney(grupo) {
  let maior = grupo[0];
  for (let key in grupo) {
    if (grupo[key] > maior) {
      maior = grupo[key];
    }
  }
  return maior;
}
console.log(`${disney(lista)}`);