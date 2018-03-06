const express = require ('express');
const GraphHTTP = require ('express-graphql');
const Schema = require ('./schema/company');

const PORT = 4000;

const app = express();

app.use('/graphql', GraphHTTP({
  schema: Schema,
  pretty: true,
  graphiql: true
}));

app.listen(PORT, () => {
  console.log(`Let magic start on Localhost:${PORT}`);
});