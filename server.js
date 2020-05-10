'use strict'

const bodyParser  = require('body-parser');
const app     = require('express')();
const path    = require("path");
const port = process.env.PORT || 6000;
const derivativeRoutes = require('./src/routes/derivative');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/derivative', derivativeRoutes);

module.exports = app.listen(port, () => {
  console.log('Alien server is alive on port', port);
});
