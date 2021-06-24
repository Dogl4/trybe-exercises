let estado = "aprovada";

switch (estado) {
  case "aprovada":
    console.log("aprovada")
    break;
  case "reprovada":
    console.log("lista")
    break;
  case "lista":
    console.log("reprovada")
    break;
  default:
    console.log("não se aplica")
    break;
}