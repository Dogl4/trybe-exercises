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
}else {
  console.log(`O 2° número é maior. ${d}`);
} 

// 3
if (c > d && C > e) {
  console.log(`O 1° número é maior. ${c}`);
}else if (d > c && d > e){
  console.log(`O 2° número é maior. ${d}`);
} else{
  console.log(`O 3° número é maior. ${e}`);
}

// 4
let valor = 5;

if(valor >0){
  console.log('Positivo');
}else if( valor === 0){
  console.log('zero');
}else{
  console.log('Negativo');
}

// 5
let n1 = 20;
let n2 = 30;
let n3 = 40;
let respostaTriangulo; 
const somaAngulo = 90;
let somaTeste = n1 + n2 + n3;

if(somaAngulo === somaTeste){
  respostaTriangulo = true;
} else{
  respostaTriangulo = false;
}
console.log(respostaTriangulo);

// 6
