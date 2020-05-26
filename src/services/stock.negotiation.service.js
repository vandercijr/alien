/**
 * Arquivo: stock.negotiation.service.js
 * Author: Vanderci Curvelo Junior
 * Description: service for stock negotiation info : 'stock.negotiation.service.js'
 * Data: 24/05/2020
 *
 * Documentação: http://chaijs.com/guide/styles/#assert
 *
 */
const { db, DataTypes, QueryTypes }  = require('../connection/db.js');

const StockNegotiationService = {
  getNegotiationDate : () => {
    return db.query(
      'SELECT MAX(DATAPREG) AS stock_negotiation_date FROM stock_negotiations',
      {
        type: QueryTypes.SELECT
      }
    )
  }
};

module.exports = StockNegotiationService;
