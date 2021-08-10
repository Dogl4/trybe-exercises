// const myExpenses = [
//   {
//     gym: 99,
//   },
//   {
//     ifood: 200,
//   },
//   {
//     phone: 60,
//   },
//   {
//     internet: 100,
//   },
// ];

// const myIncome = 1000;


// const monthlyBudget = (myIncome, myExpenses, callback) => {

//   const totalExpenses = callback(myExpenses);
//   const totalAfterExpenses = myIncome - totalExpenses;

//   console.log(`Balanço do mês:
//     Recebido: R$${myIncome},00
//     Gasto: R$${totalExpenses},00
//     Saldo: R$${totalAfterExpenses},00 `);
// };



// const handleExpenses = myExpenses => {
//   const eachValue = myExpenses.map((item) => Object.values(item)[0]);
//   const totalExpense = eachValue.reduce((acc, curr) => acc + curr , 0);
//   return totalExpense;
// };

// monthlyBudget(myIncome, myExpenses, handleExpenses);



// Para fixar
// 1 No código abaixo você tem a função getUser , que retorna uma pessoa qualquer. Complete a função getUser de forma que ela receba uma outra função como parâmetro para que possa realizar as operações abaixo sobre a pessoa retornada.
const assert = require('assert');

const userFullName = ({ firstName, lastName }) => `Hello!, My name is ${firstName} ${lastName}`;
const userNAtionality = ({ firstName, nationality }) => `${firstName} is ${nationality}`;

getUser = (callback) => {
  const userToReturn = {
    firstName: 'Ivan',
    lastName: 'Ivanovich',
    nationality: 'Russian'
  }
  return callback(userToReturn)
}

assert.strictEqual(getUser(userFullName), 'Hello!, My name is Ivan Ivanovich');
assert.strictEqual(getUser(userNAtionality), 'Ivan is Russian');