// const numbers = [1, 2, 3];
// numbers.push(4);
// console.log(numbers); // [ 1, 2, 3, 4 ]


//Exemplo de array usando o spread(espalhar)
// const carros = ['Gol', 'HB20', 'Focus'];
// const motos = ['Biz', 'R1'];

// const veiculos = [...carros, ...motos];
// console.log(veiculos);
// const veiculos2 = [...carros, 'Uno', ...motos, 'F40'];
// console.log(veiculos2);


// //Exemplo de objeto usando o spread(espalhar)
// const conhecimentoTrybe = {
//   softSkill: true,
//   hardSkills: true,
//   trabalho: true,
// }
// const pessoa = {
//   nome: 'Nádia',
//   idade: '28',
//   cidade: 'BH',
// }
// const pessoaTryber = {
//   ...pessoa,
//   ...conhecimentoTrybe,
//   esporte: 'Corrida',
// }
// console.log(pessoaTryber)

// const numbers = [1, 2, 3];
// const newArray = [...numbers, 4, 5, 6];
// console.log(newArray); // [1,2,3,4,5,6]
// console.log(numbers); // [1,2,3]
// 

// const spring = ['OUT', 'NOV', 'DEZ'];
// const summer = ['JAN', 'FEV', 'MAR'];
// const fall = ['ABR', 'MAI', 'JUN'];
// const winter = ['JUL', 'AGO', 'SET'];

// const months = [...summer, ...fall, ...winter, ...spring];
// console.log(months);



//Exemplo usando função
// const imc = (peso, altura) => (peso / (altura * altura)).toFixed(2);
// const patientInfo = [60, 1.7];
// console.log(imc(...patientInfo));


// const radomNumbers = [57, 8, 5, 800, 152, 74, 630, 98, 40];
// console.log(Math.max(...radomNumbers)); // 800
// console.log(Math.min(...radomNumbers)); // 5


// const people = {
//   id: 101,
//   name: 'Alysson',
//   age: 25,
// };
// const about = {
//   address: 'Av. Getúlio Vargas, 1000',
//   occupation: 'Developer',
// };

// const customer = {
//   ...people,
//   ...about
// };
// console.log(customer);


// Para Fixar
// Faça uma lista com as suas frutas favoritas
const specialFruit = ['Melão', 'Melancia', 'Laranja', 'Abacate', 'Morango', 'Abacaxi'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['Leite Condensado', 'Açai', 'Leite em pó'];

const fruitSalad = (fruit, additional) => {
  return [... fruit, ...additional]
};

console.log(fruitSalad(specialFruit, additionalItens));