// 1 - Retorna número fatorial, fatorial é !N, N é inteiro positivo, ! faz um decremento do N vezes seus sucessores.
// o exercicio pede o fatorial de algum número.
const fatorial = (number) => {
  let seuFatorial;
  for (let i = number; i > 1; i -= 1) {
   number === i ? seuFatorial = i * (i - 1) : seuFatorial = seuFatorial * (i - 1);
  }
  return seuFatorial;
};

console.log(fatorial(5));

// Condição ? true : false


// 2 - Retorne a maior palavras em um frase, dentro de uma string.
const retornaMaiorPalavra = (frase) => {
 let palavras = frase.split(' ');
 let maior;
 for (let i = 0; i < palavras.length - 1; i +=1) {
  palavras[i].length < palavras[i].length + 1 ? maior = palavras[i + 1] : maior = palavras[i];
  }
  return maior;
};

console.log(retornaMaiorPalavra('Antônio foi no banheiro e não sabemos o que aconteceu'));

