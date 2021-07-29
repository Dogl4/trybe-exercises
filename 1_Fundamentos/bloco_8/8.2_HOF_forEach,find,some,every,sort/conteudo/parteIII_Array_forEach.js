// Tabuada do 2 com forEach
// const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const multipliesFor2 = (element) => {
//   console.log(`${element} * 2 = ${element * 2}`);
// };

// numbers.forEach(multipliesFor2);


// HOF forEach, para transformar em toUpperCase()
// const names = ['Bianca', 'Camila', 'Fernando', 'Ana Roberta'];

// const convertToUpperCase = (name, index) => {
//   names[index] = name.toUpperCase(); // sobreEscreve
// }

// names.forEach(convertToUpperCase); // percorre todo array

// console.log(names);



// 1 Use o método forEach chamando a callback showEmailList para apresentar os emails
// const emailListInData = ['roberta@email.com', 'paulo@email.com', 'anaroberto@email.com', 'fabiano@email.com'];

// const showEmailList = (email) => {
//   console.log(`O email ${email} está cadastrado em nosso banco de dados!`);
// }

// emailListInData.forEach(showEmailList);


// 2 Utilize o find para encontrar o primeiro nome com cinco letras, caso ele exista:
const names = ['João', 'Irene', 'Fernando', 'Maria'];

const findNameWithFiveLetters = names.find((e) => e.length === 5);

console.log(findNameWithFiveLetters);