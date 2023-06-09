const express = require('express');
const { productsRoutes, salesRoutes } = require('./routers');

const app = express();
// Iniciando o projeto.
app.use(express.json());

// não remova esse endpoint, é para o avaliador funcionar
app.get('/', (_request, response) => {
  response.send();
});

app.use('/sales', salesRoutes);
app.use('/products', productsRoutes);

// não remova essa exportação, é para o avaliador funcionar
// você pode registrar suas rotas normalmente, como o exemplo acima
// você deve usar o arquivo index.js para executar sua aplicação 
module.exports = app;