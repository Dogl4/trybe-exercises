let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// 1. Percorra o array imprimindo todos os valores nele contidos com a função console.log 
console.log(numbers);

// 2. Some todos os valores contidos no array e imprima o resultado 
let soma = 0;
for (let i = 0; i < numbers.length; i += 1) {
  soma += numbers[i];
}
console.log(soma);

// 3. Calcule e imprima a média aritmética dos valores contidos no array  (média da soma todos dividido pela quantidande)
let mediaAritmetica = soma / numbers.length;
console.log(Math.ceil(mediaAritmetica));

// 4. Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor igual a 20";
if (mediaAritmetica > 20) {
  console.log(`Valor maior que 20`);
} else {
  console.log(`Valor menor ou igual a 20`);
}

// 5. Uyilizando for, descubra qual o maior valor contido no array e imprima-o; 

let maiorNumero = numbers[0];
for (let i2 = 1; i2 < numbers.length; i2 += 1) {
  if (numbers[i2] > maiorNumero) {
    maiorNumero = numbers[i2];
  }
}
console.log(`O maior número é: ${maiorNumero}`);

// 6. Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";
let impar = 0;
let grupo = [];
for (let i3 = 0; i3 < numbers.length; i3 += 1) {
  if (numbers[i3] % 2 !== 0) {
    impar += 1;
    grupo.push(numbers[i3]);
  }
}
if (impar === 0) {
  console.log('nenhum valor ímpar encontrado');
} else {
  console.log(`Quantidade de ímpares é: ${impar}. Estes são ${grupo}`);
}

// 7. Utilizando for, descubra qual o menor valor contido no array e imprima-o; 
let menorValor = numbers[0];
for (let i4 = 0; i4 < numbers.length; i4 += 1) {
  if (numbers[i4] < menorValor) {
    menorValor = numbers[i4];
  }
}
console.log(`Exercicio 7: Menor valor é ${menorValor}`);

// 8. Utilizando o for, crie um array que vá de 1 até 25 e imprima o resultado; 
let array = [];
for (i5 = 1; i5 <= 25; i5 += 1) {
  array.push([i5]);
}
console.log(`Exercicio 8:${array}`);

// 9. Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2
let resultadoDaDivisaoDeCadaElemento = [];
for (let i6 = 0; i6 < array.length; i6 += 1) {
  resultadoDaDivisaoDeCadaElemento.push(array[i6]/2);
}
console.log(`Exercicio 9: ${resultadoDaDivisaoDeCadaElemento}`);