// const numbers = [19, 21, 30, 3, 45, 22, 15];

// const verifyEven = (number) => number % 2 === 0;

// const isEven =numbers.find(verifyEven);

// console.log(isEven); // 30

// console.log(verifyEven(9)); // False
// console.log(verifyEven(14)); // True

// // Outra forma de ser realizada sem a necessidade de criar uma nova função
// const isEven2 = numbers.find((number) => number % 2 === 0); // Arrow Function
// console.log(isEven2); // 30


// 1 Utilize o find para retornar o primeiro número do array que é divisível por 3 e 5 , caso ele exista:
const numbers = [19, 21, 30, 3, 45, 22, 15];

// 1° passa o parametro
const findDivibleBy3And5 = (number) => number % 15 === 0;

// 2° HOF(1° parametro)
const resultado = numbers.find(findDivibleBy3And5)

console.log(resultado);