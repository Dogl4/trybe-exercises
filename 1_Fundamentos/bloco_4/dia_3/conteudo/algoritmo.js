let somandoTodosOsValores = 0;
let fruits = [3, 4, 10, 1, 12];
for (let i = 0; i < fruits.length; i += 1) {
  somandoTodosOsValores += fruits[i];
}
if (somandoTodosOsValores > 15) {
  console.log(somandoTodosOsValores)
} else if (somandoTodosOsValores <= 15) {
  console.log('valor menor que 16');
}