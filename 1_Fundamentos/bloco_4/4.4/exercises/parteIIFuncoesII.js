let lista = [2, 3, 6, 7, 10, 1];

function disney(grupo) {
  let maior = grupo[0];
  let index = 0;
  let resultado = 0;
  for (let key in grupo) {
    if (grupo[key] > maior) {
      maior = grupo[key];
      resultato = key;
    }
  }
  let b = `O indice ${resultato} e o maior número é ${maior}`;
  return b;
}
console.log(`${disney(lista)}`);