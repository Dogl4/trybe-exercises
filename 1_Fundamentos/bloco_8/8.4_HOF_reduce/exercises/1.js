// 1 Dada uma matriz, transforme em um array.
const assert = require('assert');

const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];
// 
// function flatten() {return arrays.reduce((acc, elem) => acc + elem, [])};
// console.log(flatten());
// Estude mais sobre concat e push.
function flatten() {return arrays.reduce((acc, elem) => acc.concat(elem), [])};
console.log(flatten());

assert.deepStrictEqual(flatten(), ['1', '2', '3', true, 4, 5, 6]);