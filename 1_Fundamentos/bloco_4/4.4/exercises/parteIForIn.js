let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};
console.log(`Bem-vinda, ${info.personagem}`);

// 2. Insira no objeto uma nova propriedade com o nome de chave 'recorrente' e o valor 'Sim' e, em seguida, imprima o objeto no console.
info.recorrente = 'Sim';
for (let key in info) {
  console.log(key, info[key]);
}

//  3. Faça um for/in que mostre todas as chaves do objeto.
for (let key in info) {
  console.log(key);
}

// 4. Faça um novo for/in , mas agora mostre todos os valores das chaves do objeto.
for (let key in info) {
  console.log(info[key]);
}

// 5.Agora, defina um segundo objeto com a mesma estrutura (as mesmas chaves) do primeiro e os seguintes valores: 'Tio Patinhas', 'Christmas on Bear Mountain, Dell's Four Color Comics #178', 'O último MacPatinhas', 'Sim'. Então, imprima os valores de cada objeto juntos de acordo com cada uma das chaves.
let info2 = {
  personagem: 'Tio Patinhas',
  origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
  nota: 'O último MacPatinhas',
  recorrente: 'Sim'
};

for (let key in info) {
  if (key === 'recorrente' && info[key] === 'Sim' && info2[key] === 'Sim') {
    console.log(`Ambos recorrentes`);
  } else {
    console.log(`${info[key]} e ${info2[key]}`);
  }
}