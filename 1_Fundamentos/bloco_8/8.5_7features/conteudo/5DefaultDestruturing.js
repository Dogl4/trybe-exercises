// const person = {
//   name: 'João',
//   lastName: 'Jr',
//   age: 34,
//   // nationality: undefined,
// };
// // // const { nationality } = person;
// // // console.log(nationality); // undefined

// // // SE NÂO TIVER, cria
// const { nationality = 'Brazilian' } = person;
// console.log(nationality); // Brazilian


// // // Para fixar
const getNationality = ({ firstName, nationality }) => `${firstName} is ${nationality}`;

const person = {
  firstName: 'João',
  lastName: 'Jr II',
};

const otherPerson = {
  firstName: 'Ivan',
  lastName: 'Ivanovich',
  nationality: 'Russian',
};

const { firstName, lastName, nationality = 'Brasilian' } = person; // Cria ????? Bugado!!!!!!!!!
// Object.assign(person, {nationality: 'Brasilian'}); // Conserta!

console.log(getNationality(otherPerson)); // Ivan is Russian
console.log(getNationality({firstName, nationality}));