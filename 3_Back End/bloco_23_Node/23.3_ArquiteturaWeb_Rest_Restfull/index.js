const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(express.json());

app.use(bodyParser.unlencoded({ extended: true }));

app.use('/products', require('./controllers/productController'));

app.listen(3000, () => { console.log('O servidor está rodando na porta: 3000'); };
