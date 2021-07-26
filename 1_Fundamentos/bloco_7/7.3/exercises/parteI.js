const assert = require('assert');

function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }

  return a + b;
}

// implemente seus testes aqui
assert.strictEqual(typeof sum, 'function'); // Teste se é uma função
assert.strictEqual(sum(4, 5), 9, '4 + 5 = 9.'); // 1 Teste se é 4 + 5 = 9
assert.strictEqual(sum(0, 0), 0, 'Teste para a = 0 e b = 0'); // 2 Teste para o retorno de 0,0 = 0;
assert.throws(() => {
  sum(4, '5')
}); // 3 Teste se a função sum lança um erro quando os parâmetros são 4 e "5" (string 5)
// Não aparece a minha mensagem, por cause do if(true){'throw new Error('Mensagem de erro');}'
assert.throws(() => {
  sum(4, '5')
}, /^Error: parameters must be numbers$/); // 4 Teste se a mensagem de erro é "parameters must be numbers" quando realizar a chamada sum(4, "5");
// 4 Verifica se o teste de erros está funcionando.