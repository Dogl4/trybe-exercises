let lista = [2, 4, 6, 7, 10, 0, -3];

function disney(grupo) {
  let menor = grupo[0];
  let index = 0;
  let resultado = 0;
  for (let key in grupo) {
    if (grupo[key] < menor) {
      menor = grupo[key];
      resultato = key;
    }
  }
  let b = `O indice ${resultato} e o menor número é ${menor}`;
  return b;
}
console.log(`${disney(lista)}`);