// some() _ se algum for true
// const listNames = ['Maria', 'Manuela', 'Jorge', 'Ricardo', 'Wilson'];

// // letter, letra de parametro, que o usuario ira comparar
// const verifyFirstLetLetter = (letter, array) => array.some(name => name[0] === letter);

// console.log(verifyFirstLetLetter('J', listNames)); // true
// console.log(verifyFirstLetLetter('x', listNames)); // false


// // every() _ se TODOS * for true |||| {} não funciona, precisa de return
// const grades = {
//   portugues: 'Aprovado',
//   matematica: 'Aprovado',
//   ingles: 'Aprovado',
// };

// const verifyGrades = (e) => {
//   return Object.values(e).every(grade => grade === 'Aprovado')
// }; // undefi {}

// console.log(verifyGrades(grades));

// // // //// () não precisa de return
// const grades = {
//   portugues: 'Aprovado',
//   matematica: 'Reprovado',
//   ingles: 'Aprovado',
// };

// const verifyGrades = (studentGrades) => (
//   Object.values(studentGrades).every((grade) => grade === 'Aprovado')
// ); // normal ()

// console.log(verifyGrades(grades));


// 1 Escreva uma função que dado um array de nomes e um nome retorne true se ele estiver contido e caso contrário, retorne false , use some ;
// const names = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];

// const hasName = (arr, name) => {
//   return arr.some(elem => elem === name)
// };

// console.log(hasName(names, 'Ana'))


// 2 Escreva uma função que dado um array de pessoas e uma idade mínima retorne true se todas tiverem a idade maior ou igual a mínima e caso contrário false , use every ;
// const people = [
//   { name: 'Mateus', age: 18 },
//   { name: 'José', age: 16 },
//   { name: 'Ana', age: 23 },
//   { name: 'Cláudia', age: 20 },
//   { name: 'Bruna', age: 19 },
// ];

// const verifyAges = (arr, minimumAge) => {
//   return arr.every(elem => elem >= minimumAge);
// }

// console.log(verifyAges(people, 18));