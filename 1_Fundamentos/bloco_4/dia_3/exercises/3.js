let n = 5;
tijolo = '';
espaco = '';

for (let i = n; i > 0; i -= 1) {
  espaco += ' ';
}

for (let i2 = 0; i2 < n; i2 += 1) {

  tijolo += '*';
  espaco += '';

  console.log(espaco, tijolo);

}