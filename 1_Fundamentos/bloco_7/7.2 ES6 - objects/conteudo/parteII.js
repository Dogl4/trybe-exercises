const student1 = {
  Html: 'Muito Bom',
  Css: 'Bom',
  JavaScript: 'Ótimo',
  SoftSkills: 'Ótimo',
};

const student2 = {
  Html: 'Bom',
  Css: 'Ótimo',
  JavaScript: 'Ruim',
  SoftSkills: 'Ótimo',
  Git: 'Bom', // chave adicionada
};

const nivelAluno = (objeto) => {
  const keys = Object.keys(objeto); // array com as chaves - keys
  let guarda = '';
  for (let key in keys) { // key = indice[0,1,2,3]; keys = [HTML,Css,JAva];
      guarda += `${keys[key]} Nível: ${objeto[keys[key]]}\n`; // keys[key] HTML; objeto.[keys[key]];
  }
  return guarda;
};


console.log('Estudande 1,\n', nivelAluno(student1));