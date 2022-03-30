require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const product = require('./router/productRouter');
const sales = require('./router/salesRouter');

const app = express();

app.use(bodyParser.json());

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.send();
});

app.use('/products', product);

app.use('/sales', sales);

app.listen(process.env.PORT, () => {
  console.log(`Escutando na porta ${process.env.PORT}`);
});
