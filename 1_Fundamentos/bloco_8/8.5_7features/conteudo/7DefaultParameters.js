// const greeting = (user) => console.log(`Welcome ${user}!`);

// greeting(); // Welcome undefined!


//USANDO TERNÁRIO PARA DIEXA PADRÃO
// const greeting = (user) => {
//   const userDisplay = typeof user === 'undefined' ? 'usuário' : user;
//   console.log(`Welcome ${userDisplay}!`);
// };

// greeting(); // Welcome usuário!


// DEFAULT PARAMETERS
const greeting = (user = 'usuário') => console.log(`Welcome ${user}!`);
// se não exitir, use está
greeting(); // // Welcome usuário!