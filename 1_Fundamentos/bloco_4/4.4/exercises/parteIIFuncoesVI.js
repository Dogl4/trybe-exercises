let n = 5;

function somaAnteriores(numero) {
  let somatoria = 0;
  for (let i = numero; i > 0; i -= 1) {
    somatoria += i; 
  }
  return somatoria;
}

console.log(somaAnteriores(n));