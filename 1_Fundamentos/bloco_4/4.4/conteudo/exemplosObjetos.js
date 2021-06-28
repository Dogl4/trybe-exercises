let name = 'Marta';
let lastName = 'Silva';
let age = 34;
let medals = {
  golden: 2,
  silver: 3,
};

// Acesse as chames name, lastName e age e concatene.
let fullName = name + ' ' + lastName;
console.log(`A jogadora ${fullName} tem ${age} anos de idade`);

// 3. Adicione ao objeto a chave bestInTheWorld e atribua a esta chave um array contendo as datas em que a jogadora Marta foi considerada a melhor do mundo.
medals['bestInTheWorld'] = [2006,2007,2008,2009,2010,2018];

// 4. Acesse a chave bestInTheWorld e faça um console.log no seguinte formato: "A jogadora Marta Silva foi eleita a melhor do mundo por 6 vezes".
console.log(`A jogadora ${fullName} foi eleita a melhor do mundo por ${medals.bestInTheWorld.length} vezes`);

// 5. Acesse a chave medals e faça um console.log no seguinte formato: "A jogadora possui 2 medalhas de ouro e 3 medalhas de prata".
console.log(`A jogadora ${fullName} possui ${medals.golden} medalhas de ouro e ${medals.silver} medalhas de prata`);

