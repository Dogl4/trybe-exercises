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
// const numbers = [19, 21, 30, 3, 45, 22, 15];

// // 1° passa o parametro
// const findDivibleBy3And5 = (number) => number % 15 === 0;

// // 2° HOF(1° parametro)
// const resultado = numbers.find(findDivibleBy3And5)

// console.log(resultado);



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