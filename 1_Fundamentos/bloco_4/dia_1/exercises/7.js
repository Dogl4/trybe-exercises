let nota = 65;
let notaEmLetras;

switch (nota) {
  case nota >= 90:
    notaEmLetras = 'A';
    break;
  case nota >= 80:
    notaEmLetras = 'B';
    break;
  case nota >= 70:
    notaEmLetras = 'C';
    break;
  case nota >= 60):
    notaEmLetras = 'D';
    break;
  case nota >= 50:
    notaEmLetras = 'E';
    break;
  case nota < 50:
    notaEmLetras = 'F';
}
console.log(notaEmLetras);