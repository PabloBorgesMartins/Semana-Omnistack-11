const express = require('express');
const cors = require('cors');
const routes = require('./routes')

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

/**?
 * Métodos HTTP:
 * GET
 * POST
 * PUT
 * DELETE
 */

/**?
 * Tipos de parâmetros:
 * 
 * Query Params: Parâmetros nomeadoes enviados na rota após "?" (Filtros, paginação)
 * Route Params: Parâmetros utilizados para identificar recursos
 * Request Body: Corpo da requisição, utilizado parar criar ou alterar
 * 
 */

 /**
  * BANCO DE DADOS
  * Driver: SELECT * FROM users
  * Query Builder: table('users').select('*').where()
  */




app.listen(3333);