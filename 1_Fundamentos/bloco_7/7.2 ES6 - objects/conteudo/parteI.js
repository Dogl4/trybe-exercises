// const customer = {
//   firstName: 'Roberto',
//   age: 22,
//   job: 'Teacher',
// };

// const customer = {
//   firstName: 'Roberto',
//   lastName: 'Faria', // Propriedade adicionada.
//   age: 22,
//   job: 'Teacher',
// };

// const customer1 = {
//   firstName: 'Roberto',
//   age: 22,
//   job: 'Teacher',
// };

// console.log(customer1);

// customer1.lastName = 'Faria';
// console.log(customer1);

// const customer2 = {
//   firstName: 'Maria',
//   age: 23,
//   job: 'Medic',
// };

// console.log(customer2);
// customer2['lastName'] = 'Silva';
// console.log(customer2);

// const recebeTres = (objeto, chave, valor) => {
//   return `${objeto} = {${chave}: ${valor}}`;
// }

const comidas = {
  brasileira: 'Feijoada'
};

const junta = (objeto, chaveEntreAspas, valueEntreAspas) => {
  objeto[chaveEntreAspas] = valueEntreAspas;
  return objeto;
}

console.log('comidas:', junta(comidas, 'Itatliana', 'Lasanha'));
