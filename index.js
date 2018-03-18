//const express = require ('express');
//const GraphHTTP = require ('express-graphql');
//const Schema = require ('./schema/');
import express from 'express';
import models from './DB';

const PORT = 4000;

const app = express();

// app.use('/graphql', GraphHTTP({
//   schema: Schema,
//   pretty: true,
//   graphiql: true
// }));
models.sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Let magic start on Localhost:${PORT}`);
  });
});