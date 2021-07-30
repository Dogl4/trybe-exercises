const objetoUsuari = (fullName) => {
  return {
    nomeCompleto: fullName,
    email: `${fullName.split(' ').join('_')}@trybe.com`,
  }
};

const newEmployees = (action) => {
  const employees = {
    id1: action('Pedro Guerra'),
    id2: action('Luiza Drumond'), 
    id3: action('Carla Paiva'), 
  }
  return employees;
};


//Uma funcao que recebe a outra como funca, HOF
// Retrona o email
console.log(newEmployees(objetoUsuari).id1.email);

// Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
// Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
// Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas