const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

// 1 Crie uma função para adicionar o turno da manhã na lesson2 . Essa função deve possuir três parâmetros, sendo eles: o objeto a ser modificado, a chave que deverá ser adicionada e o valor dela.

const addFuncao = (lesson2) => {
  lesson2.turno = 'manhã';
}
addFuncao(lesson2)
// console.log(lesson2);

// 2 Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro.

const listaKeys = (obj) => {
  return Object.keys(obj);
}

// 3 Crie uma função para mostrar o tamanho de um objeto.

const lengthObject = (obj) => {
  return Object.keys(obj.length);
}

// 4 Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro.

const listaValeus = (obj) => {
  return Object.values(obj);
}

// 5 Crie um objeto de nome allLessons , que deve agrupar todas as aulas através do Object.assign . Cada chave desse novo objeto será uma aula, sendo essas chaves: lesson1 , lesson2 e lesson3 . Ao executar o comando console.log(allLessons) , a saída deverá ser a seguinte:

const allLessons = {};

Object.assign(allLessons, {
  lesson1,
  lesson2,
  lesson3
});

// console.log(allLessons);

// 6 Usando o objeto criado no exercício 5, crie uma função que retorne o número total de estudantes em todas as aulas.

const totalStunding = (obj) => {
  return obj.lesson1.numeroEstudantes + obj.lesson2.numeroEstudantes + obj.lesson3.numeroEstudantes;
};

// console.log(totalStunding(allLessons));

// 7 Crie uma função que obtenha o valor da chave de acordo com a sua posição no objeto. Por exemplo:

const positionChave = (obj, chave) => {
  return Object.values(obj)[chave]; // Pega o TODOS os valores, e acessa em especifico o da CHAVE;
}

console.log(positionChave(lesson2, 0));

// 8 Crie uma função que verifique se o par (chave / valor) existe na função. Essa função deve possuir três parâmetros, sendo eles: o objeto, o nome da chave e o valor da chave. Exemplo:

const retonaSeExistir = (obj, chave, valeu) => {
  const mapObj = Object.entries(obj);
  for (index in mapObj) {
    if (mapObj[0][index] && mapObj[1][index]) { // percore o array, do map, map[1][indice] = [[c,v],[c,v]]
      return true; // map[chaves][procura]; map[valeus][procura];
    }
  }
  return false;
}

console.log(retonaSeExistir(lesson2, 'turno', 'manhã'));