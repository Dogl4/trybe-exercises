let nome = 'abba';
let contrario = '';

function palindromo(nome) {
  for (let i = (nome.length - 1); i >= 0; i -= 1) {
    contrario += nome[i];
  }
  if (nome === contrario) {
    return true;
  } else {
    return false;
  }
}

console.log(`${palindromo(nome)} ${contrario}`);