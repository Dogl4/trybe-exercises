const oddsAndEvens = [13, 3, 4, 10, 7, 2];

console.log(oddsAndEvens.sort());

oddsAndEvens.sort((a, b) => {
  {
    return a - b
  }
});
// Usa uma função nativa do js .sort() e ?
console.log(oddsAndEvens); // será necessário alterar essa linha 😉

// Referencias <https://developer.mozilla.org/pt-BR/docs/orphaned/Web/JavaScript/Reference/Global_Objects/Array/sort>