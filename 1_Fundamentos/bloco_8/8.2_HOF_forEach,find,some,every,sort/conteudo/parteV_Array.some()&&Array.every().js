// some() _ se algum for tru
const listNames = ['Maria', 'Manuela', 'Jorge', 'Ricardo', 'Wilson'];

// letter, letra de parametro, que o usuario ira comparar
const verifyFirstLetLetter = (letter, array) => array.some(name => name[0] === letter);

console.log(verifyFirstLetLetter('J', listNames)); // true
console.log(verifyFirstLetLetter('x', listNames)); // false