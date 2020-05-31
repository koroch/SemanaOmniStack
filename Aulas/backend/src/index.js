const express = require('express');
const cors = require('cors');
const { errors } = require('celebrate');
const routes = require('./routes')

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use(errors());
/**
 * Rota / Recurso
*/

/**
 * Métodos HTTP:
 * 
 * GET: Buscar ou listar uma informações do back-end
 * POST: Criar uma informação no back-end
 * PUT: Alterar uma informação no back-end
 * DELETE: Deletar uma informação no back-end
 */

 /**
  * Tipos de parametros:
  *
  *  Query params: Parametros nomeados enviados na rota apos "?" (filtros, paginação)
  *  Route params: parametros utilizados para identificar recursos
  *  Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
*/

/**
 * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
 * NoSQL: MongoDB...
 */

app.listen(3333);
