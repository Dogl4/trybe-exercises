// const arrayCountries = ['Brazil', 'Japan', 'China', 'Canada'];

// const firstCountry = arrayCountries[0];
// const secondCountry = arrayCountries[1];
// const thirdCountry = arrayCountries[2];
// const fourthCountry = arrayCountries[3];

// console.log(firstCountry);
// console.log(secondCountry);
// console.log(thirdCountry);
// console.log(fourthCountry);


// const arrayCountries = ['Brazil', 'Japan', 'China', 'Canada'];
// const [firstCountry, secondCountry, thirdCountry, fourthCountry] = arrayCountries;
// console.log(firstCountry);
// console.log(secondCountry);
// console.log(thirdCountry);
// console.log(fourthCountry);



// // Para Fizar

// // 1 Produza o mesmo resultado do código, porém utilizando o array destructuring para recolher a função e a saudação.
// const saudacoes = ['Olá', (saudacao) => console.log(saudacao)];

// saudacoes[1](saudacoes[0]); // Olá
// // Produza o mesmo resultado acima, porém utilizando array destructuring
// const [arrayOne, arrayTwo] = saudacoes;
// arrayTwo(arrayOne);


// // 2 A seguir, temos alguns valores que estão descritos em variáveis incoerentes. Através da desestruturação de arrays, corrija os valores das variáveis.
// let comida = 'gato';
// let animal = 'água';
// let bebida = 'arroz';

// console.log(comida, animal, bebida); // arroz gato água

// const [animalNew, bebidaNew, comidaNew] = [comida, animal, bebida];
// console.log(animalNew, 'Animal');
// console.log(bebidaNew, 'Bebida');
// console.log(comidaNew, 'Comida');

// // Utilizando array destructuring, faça com que os valores apareçam nas variáveis correspondentes ao seu verdadeiro tipo


// 3 array abaixo possui alguns números que não condizem com o conteúdo que ele deveria possuir. Através de array destructuring, faça com que existam apenas números pares na variável numerosPares .
let numerosPares = [1, 3, 5, 6, 8, 10, 12];

console.log(numerosPares); // [6, 8, 10, 12];

const even = (args) => (args.filter(arg => arg % 2 === 0));
console.log(even(numerosPares));

// Utilize array destructuring para produzir o resultado esperado pelo console.log abaixo
