const {
  default: fetch
} = require("node-fetch");

// apiScript.js     
const API_URL = 'https://icanhazdadjoke.com/';

// const fetchJoke = () => {
//   const myObject = {
//     method: 'GET',
//     headers: { 'Accept': 'application/json' }
//   };

//   // 1° Parametro | Endereço para o qual a requisição será feita, ou seja, a url do serviço.
//   // 2° Parametro |Um objeto contendo as especificações da requisição. Para essa API , atribuiremos a esse objeto as chaves method e headers
//   fetch(API_URL, myObject)
//     .then(response => response.json())
//     .then(data => console.log(data));
// };
// window.onload = () => fetchJoke();


const fetchPromise = () => {
  const myPromise = new Promise((resolve, reject) => {
    const myArray = Array.from({
        length: 10
      }, () =>
      Math.floor(Math.random() * 50) + 1
      );
      console.log(myArray);
    const sum = myArray.map((number) => number ** 2)
      .reduce((sum, currentValue) => sum + currentValue);

    sum > 8000 ? resolve(sum) : reject(sum);
  });
  myPromise
  .then((sum) => console.log(`Sorte ${sum}`))
  .catch((sum) => console.log(`Erro: ${sum}`));
};

fetchPromise();