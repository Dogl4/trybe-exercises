// let cars = ['Saab', 'Volvo', 'BMW'];
// for (let key in cars) {
//   console.log(cars[key]);
// }

// let car = {
//   type: 'Fiat',
//   model: '500',
//   color: 'white',
// };

// for (let index in car) {
//   console.log(index, car[index]);
// }

// let food = ['hamburguer', 'bife', 'acarajé'];

// for (let position in food) {
//   console.log(position);
// };
//resultado: 0, 1, 2;
// for (let value of food) {
//   console.log(value);
// };
//resultado: hamburguer, bife, acarajé;

// 1. Usando o objeto abaixo, utilize For/in e imprima no console a mensagem 'Olá xxxxx' para cada nome, substituindo o xxxxx pelo nome em questão.
let names = {
  person1: 'João',
  person2: 'Maria',
  person3: 'Jorge'
}
for (let key in names) {
  console.log(`Olá ${names[key]}`);
}

// 2. Usando o objeto abaixo, utilize For/in e imprima um console.log com as chaves e valores desse objeto.
let car = {
  model: 'A3 Sedan',
  manufacturer: 'Audi',
  year: 2020
};
for (let key in car) {
  console.log(key, car[key]);
}