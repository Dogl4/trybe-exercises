// Tabuada do 2 com forEach
// const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const multipliesFor2 = (element) => {
//   console.log(`${element} * 2 = ${element * 2}`);
// };

// numbers.forEach(multipliesFor2);


// HOF forEach, para transformar em toUpperCase()
const names = ['Bianca', 'Camila', 'Fernando', 'Ana Roberta'];

const convertToUpperCase = (name, index) => {
  names[index] = name.toUpperCase(); // sobreEscreve
}

names.forEach(convertToUpperCase); // percorre todo array

console.log(names);