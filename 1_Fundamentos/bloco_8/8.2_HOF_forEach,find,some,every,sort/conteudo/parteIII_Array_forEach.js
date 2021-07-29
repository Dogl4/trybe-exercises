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


// // 2 Utilize o find para encontrar o primeiro nome com cinco letras, caso ele exista:
// const names = ['João', 'Irene', 'Fernando', 'Maria'];

// const findNameWithFiveLetters = names.find((e) => e.length === 5); // Verifica nome dentro do fin e retorna o primero nome com tamanho 5

// console.log(findNameWithFiveLetters);


// 3 Utilize o find para encontrar a música com id igual a 31031685 , caso ela exista:
const musicas = [{
    id: '31031685',
    title: 'Partita in C moll BWV 997'
  },
  {
    id: '31031686',
    title: 'Toccata and Fugue, BWV 565'
  },
  {
    id: '31031687',
    title: 'Chaconne, Partita No. 2 BWV 1004'
  },
]

const findMusic = (valorId) => musicas.find((elemento) => elemento.id === valorId); // 3 funções em uma linha.
// 1° comparação, 2° find(), percorre o array e retorna o 1°elemento, 3° função o valor para comparar.

console.log(findMusic('31031685'));