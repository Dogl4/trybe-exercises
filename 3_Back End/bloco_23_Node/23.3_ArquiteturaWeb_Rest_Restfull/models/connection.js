const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  host: 'localhost',
  user: 'seuUsuario',
  password: 'suaSenha',
  database: 'rest_exercicios'
});

module.exports = connection;
