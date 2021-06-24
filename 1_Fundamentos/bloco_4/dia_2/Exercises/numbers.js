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
let mediaAritmetica = soma / (numbers.length - 1);
console.log(Math.ceil(mediaAritmetica));

// 4. Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor igual a 20";
if (mediaAritmetica > 20) {
  console.log(`Valor maior que 20`);
} else {
  console.log(`Valor menor ou igual a 20`)
}

