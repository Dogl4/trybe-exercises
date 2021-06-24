let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// 1. Percorra o array imprimindo todos os valores nele contidos com a função console.log 
console.log(numbers);

// 2. Some todos os valores contidos no array e imprima o resultado 
let soma = 0;
for (let i = 0; i < numbers.length; i += 1) {
  soma += numbers[i];
}
console.log(soma);

