// 1
let a;
let b;

a = 5;
b = 10;

let adicao = a + b;
console.log(`Adição. ${adicao}`);

let subtracao = a - b;
console.log(`Subtração. ${subtracao}`);

let multiplicacao = a * b;
console.log(`Multiplicação. ${multiplicacao}`);

let divisao = a / b;
console.log(`Divisão. ${divisao}`);

let modulo = a % b;
console.log(`Modulo. ${modulo}`);

// 2
let c = 1;
let d = 2;
let e = 3;

if (c > d) {
  console.log(`O 1° número é maior. ${c}`);
} else {
  console.log(`O 2° número é maior. ${d}`);
}

// 3
if (c > d && C > e) {
  console.log(`O 1° número é maior. ${c}`);
} else if (d > c && d > e) {
  console.log(`O 2° número é maior. ${d}`);
} else {
  console.log(`O 3° número é maior. ${e}`);
}

// 4
let valor = 0;
let verificar;

if (valor > 0) {
  verificar = true;
} else if (valor === 0) {
  verificar = 'Zero';
} else {
  verificar = false;
}
console.log(verificar);

// 5
let n1 = 20;
let n2 = 30;
let n3 = -60;
let respostaTriangulo;
const somaAngulo = 180;
let somaTeste = n1 + n2 + n3;

if (n1 < 0 || n2 < 0 || n3 < 0) {
  respostaTriangulo = (`${false}. Ângulo inválido`)
} else if (somaAngulo === somaTeste) {
  respostaTriangulo = true;
} else {
  respostaTriangulo = false;
}
console.log(respostaTriangulo);

// 6
