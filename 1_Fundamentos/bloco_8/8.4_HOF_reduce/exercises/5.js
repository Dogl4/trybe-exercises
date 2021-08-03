// 5 Dada o array de nomes, retorne a quantidade de vezes em que aparecem a letra a maiúscula ou minúscula.
const assert = require('assert');

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA() {
  // array.reduce.( 0 + resultado.reduce(0 + vezes que 'a' se repetem))
  return names.reduce((acc, curr) => acc + curr.toLowerCase().split('').reduce(
    (acc2, curr2) => (curr2 === 'a' ? acc2 + 1 : acc2), 0), 0)
}
console.log(containsA());

// assert.deepStrictEqual(containsA(), 20);