'use strict'

const bodyParser  = require('body-parser');
const express     = require('express');
const app         = express();
const path    = require("path");
const port = process.env.PORT || 3000;
const derivativeRoutes = require('./src/routes/derivative');
const StockNegotiationService = require('./src/services/stock.negotiation.service');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/derivative', derivativeRoutes);


StockNegotiationService.getNegotiationDate()
.then((res) =>  {
  app.set('stock_negotiation_date', res[0].stock_negotiation_date);
});

// .then((res) =>  {
//   app.set('stock_negotiation_date', res[0].stock_negotiation_date)
// })

app.listen(port, () => {
  console.log('Alien server is alive on port', port);
});

module.exports = app;
