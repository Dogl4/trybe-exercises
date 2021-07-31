// const numbers = [19, 21, 30, 3, 45, 22, 15];

// const verifyEven = (number) => number % 2 === 0; // parametro

// const isEven = numbers.filter(verifyEven); // FILTRA(condição| parametro)

// // console.log(isEven); // [30, 22]


// // Mais Resumido
// const isEven2 = numbers.filter(number => number % 2 === 0); // array.filtro(condição)

// console.log(`Lista [${numbers}] destes, os números pares: `, isEven2); // [30, 22]


const objPeople = [
  { name: 'José', age: 21 },
  { name: 'Lucas', age: 19},
  { name: 'Maria', age: 16},
  { name: 'Gilberto', age: 18},
  { name: 'Vitor', age: 15},
];

const verifyAgeDrive = (arrayOfPeople) => (arrayOfPeople.filter(objPeople => objPeople.age < 18));
console.log(verifyAgeDrive(objPeople));


const arrayMyStudents = ['Maria', 'Manuela', 'Jorge', 'Ricardo', 'Wilson'];

const removeStudentByName = (name, listStudents) => 
listStudents.filter(student => student !== name);
// Filtra todos os nomes, e salva qual for diferente


const newListStudents = removeStudentByName('Ricardo', arrayMyStudents);
console.log(newListStudents);
