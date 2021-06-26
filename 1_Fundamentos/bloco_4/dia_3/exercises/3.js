let n = 5;
let tijolo = '';
let espaco = ' ';

// for (let i = n; i >= 0; i -= 1) {
//   espaco += ' ';
// }
// console.log(espaco);
let somaEspaco = espaco + ' ';
somaEspaco = somaEspaco.repeat(n);
console.log(somaEspaco);

for (let i2 = 1; i2 <= n; i2 += 1) {
  tijolo += '*';
  console.log(' '.repeat(n - i2) + tijolo);
}