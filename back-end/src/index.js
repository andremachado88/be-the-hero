const express = require('express');
const cors = require('cors');
const routes = require('./routes');


const app = express();

app.use(cors());
app.use(express.json());

app.use(routes);
/**
 * Rota / Recurso
 */

 /**
  * Métodos HTTP
  * GET : Buscar uma informação do back-end
  * POST : Criar uma informação no back-end
  * PUT : Alterar uma informação no back-end
  * DELETE : Deletar uma informação no back-end
  */

  /**
   * Tipos de parâmetros 
   * Query Params : Parametros nomeados envidos na rota após "?" (Filtro, paginiação)
   * Route Params : Parametros utilizados para identificar recursos 
   * Request Body : Corpo da requisição, utilizdo para criar ou alterar usuário
   */

   /**
    * SLQ : MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
    * NoSQL: MongoDB, CouchDB, etc
    */

    /**
     * Driver : SELECT * FROM users
     * Query Builder: table('users').select('*').where()
     */


app.listen(3333);

