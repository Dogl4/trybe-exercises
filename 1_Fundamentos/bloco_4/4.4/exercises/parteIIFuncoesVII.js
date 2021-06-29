let palavra = "Trybe";
let fim = "be";

function verificaFimPalavra(palavraUm, palavraDois) {
  palavraUm = palavraUm.split('').reverse().join('');
  palavraDois = palavraDois.split('').reverse().join('');
  let verifica = 0;
  for (let i = (palavraDois.length - 1); i >= 0; i -= 1) {
    if (palavraDois[i] === palavraUm[i]) {
      verifica += 1;
    }
    if (verifica === palavraDois.length) {
      return true;
    }
  }
  return false;
}

console.log(verificaFimPalavra(palavra, fim));