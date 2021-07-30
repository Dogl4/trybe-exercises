// const food = ['arroz', 'feijão', 'farofa', 'chocolate', 'doce de leite'];
// food.sort();
// console.log(food);
// // [ 'arroz', 'chocolate', 'doce de leite', 'farofa', 'feijão' ]


// // sort() só ordena o PRIMEIRO caracter, pq ele converte ele para UTF-16
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// numbers.sort();
// console.log(numbers); // [1, 10, 2, 3, 4, 5, 6, 7, 8, 9]


// // ordena número mais de duas casa decimais.
// const points = [40, 100, 1, 5, 25, 10];
// points.sort((a, b) => a - b);
// console.log(points); // [1, 5, 10, 25, 40, 100]

// // decrecente
// const points = [40, 100, 1, 5, 25, 10];
// points.sort((a, b) => b - a);
// console.log(points); // [ 100, 40, 25, 10, 5, 1 ]



// 1 Utilize a sort para ordenar o array pela idade das pessoas em ordem crescente .
const people = [
  { name: 'Mateus', age: 18 },
  { name: 'José', age: 16 },
  { name: 'Ana', age: 23 },
  { name: 'Cláudia', age: 20 },
  { name: 'Bruna', age: 19 },
];

// const ordena = (obj) => obj.Object.values(age).sort((a, b) => a - b); // Viagem total
people.sort((a, b) => a.age - b.age); // array.sort((1°,2°) => 1°.age - 2°.age)

console.log(people);

people.sort((a, b) => b.age - a.age); // array.sort((1°,2°) => 1°.age - 2°.age)
console.log(people);
