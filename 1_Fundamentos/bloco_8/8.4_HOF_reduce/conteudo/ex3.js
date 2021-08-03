// const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];

// const getEven = number => number % 2 === 0;
// const sumPair = (currentValue, number) => currentValue + number;

// const sumNumbers = array => array.filter(getEven).reduce(sumPair); // Filtra para depois somar

// console.log(sumNumbers(numbers)); // 152


// const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];
// // Filtra para depois somar, tudo na mesma linha, sequência da esquerda para direita! =>, ordem!
// const sumNumbers = array => array.filter(number => number % 2 === 0).reduce((currentValue, number) => currentValue + number);
// console.log(sumNumbers(numbers)); // 152


// const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];
// // se for true => some, se não => não some
// const sumPair = (currentValue, number) => ((number % 2 === 0) ? currentValue + number : currentValue);

// const sumNumbers = array => array.reduce(sumPair, 0);
// console.log(sumNumbers(numbers)); // 152



const estudantes = [
  {
    nome: 'Jorge',
    sobrenome: 'Silva',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: 67 },
      { name: 'Português', nota: 79 },
      { name: 'Química', nota: 70 },
      { name: 'Biologia', nota: 65 },
    ],
  },
  {
    nome: 'Mario',
    sobrenome: 'Ferreira',
    idade: 15,
    turno: 'Tarde',
    materias: [
      { name: 'Matemática', nota: 59 },
      { name: 'Português', nota: 80 },
      { name: 'Química', nota: 78 },
      { name: 'Biologia', nota: 92 },
    ],
  },
  {
    nome: 'Jorge',
    sobrenome: 'Santos',
    idade: 15,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: 76 },
      { name: 'Português', nota: 90 },
      { name: 'Química', nota: 70 },
      { name: 'Biologia', nota: 80 },
    ],
  },
  {
    nome: 'Maria',
    sobrenome: 'Silveira',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: 91 },
      { name: 'Português', nota: 85 },
      { name: 'Química', nota: 92 },
      { name: 'Biologia', nota: 90 },
    ],
  },
  {
    nome: 'Natalia',
    sobrenome: 'Castro',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: 70 },
      { name: 'Português', nota: 70 },
      { name: 'Química', nota: 60 },
      { name: 'Biologia', nota: 50 },
    ],
  },
  {
    nome: 'Wilson',
    sobrenome: 'Martins',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: 80 },
      { name: 'Português', nota: 82 },
      { name: 'Química', nota: 79 },
      { name: 'Biologia', nota: 75 },
    ],
  },
];

// (Guarda, percorre) Compara: Guardado com o Percorrido => Guarda o maior, 
// const getBestClass = (aculumador, materia) => ( aculumador.nota > materia.nota ? aculumador.name : materia.name);

const reportBetter = students => students.map(student => ({
  name: student.nome,
  materia: student.materias.reduce((aculumador, materia) => ( aculumador.nota > materia.nota ? aculumador : materia)).name
})); // cria outro objeto, retorna objeto criado, usa o reduce como for, para percorrer e achar o maior nota para cada estudante
console.log(reportBetter(estudantes));