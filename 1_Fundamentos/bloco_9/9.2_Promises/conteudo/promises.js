// const promise = new Promise((resolve, reject) => {
//   const number = Math.floor(Math.random() * 11);

//   if (number <= 5 ) {
//     return reject(console.log(`Que fracasso =( Nosso número foi ${number}`))
//   }
//   resolve(console.log(`Que sucesso =) nosso número foi ${number}`));
// });

// // Gostei do exemplo.



// // .tech()  --> Então, continua depois...

// const promise = new Promise((resolve, reject) => {
//   const number = Math.floor(Math.random() * 11);

//   if (number <= 5 ) {
//     return reject(concole.log(`Que fracasso =( Nosso número foi ${number}`));
//   }
//   resolve(number);
// })
// .then(number => `Que sucesso =) nosso número foi ${number}`)
// .then(msg => console.log(msg))



// .catch()  --> Captura, mensagem de erro.

const promise = new Promise((resolve, reject) => {
  const number = Math.floor(Math.radom() * 11);

  if (number <= 5) {
    return reject(number);
  }
  resolve(number);
})
.then(number => `Que suceso =) nosso número foi ${number}`)
.then(msg => console.log(msg))
.catch(number => console.log(`Que fracasso =( Nosso número foi ${number}`))