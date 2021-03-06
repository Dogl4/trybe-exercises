const assert = require('assert');

function myRemove(arr, item) {
  let newArr = [];
  for (let index = 0; index < arr.length; index += 1) {
    if (item !== arr[index]) {
      newArr.push(arr[index]);
    }
  }
  return newArr;
}

// console.log(myRemove([1, 2, 3, 4], 3));

// 1 Verifique se a chamada myRemove([1,2,3,4],
assert.deepStrictEqual(myRemove([1, 2, 3, 4], 3), [1, 2, 4]); // verifica === array, .deepSrictEqual()

// 2 Verifique se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]
assert.notDeepStrictEqual(myRemove([1, 2, 3, 4], 3), [1, 2, 3, 4]); // verifica, !== da entrada

// 3 Verifique se o array passado por parâmetro não sofreu alterações
