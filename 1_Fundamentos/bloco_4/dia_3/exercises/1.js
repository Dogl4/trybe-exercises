let n = 5;
let parede = '';
if (n > 1) {
  for (let i = 1; i <= n; i += 1) {
    parede += '*';
  }
  for (let i = 0; i < n; i += 1) {

    console.log(parede);
  }
}