listaNumeros = [1, 2, 3, 2, 5, 8, 2, 3];

function catatue(n1) {
  let maior = n1[0];
  let contador = 0;
  let numeroRepetido = null;
  for (let key in catatue) {
    if (maior === catatue[key]) {
      contador += 1;
      numeroRepetido = catatue[key];
    } if ( catatue[key] )
  }
  return;
}

console.log(catatue(listaNumeros));