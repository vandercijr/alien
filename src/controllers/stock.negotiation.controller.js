/**
 * Arquivo: derivative.controller.js
 * Author: Vanderci Curvelo Junior
 * Description: controller for derivative info : 'derivative.controller.js'
 * Data: 08/05/2020
 *
 * Documentação: http://chaijs.com/guide/styles/#assert
 *
 */
const { db, DataTypes }  = require('../connection/db.js');
const StockNegotiations  = require('../models/StockNegotiations.js')(db, DataTypes);
const StockNegotiationService = require('../services/stock.negotiation.service');
const DerivativeService = require('../services/derivative.service');

const StockNegotiationController = {
  getAll : (req, res) => {
    const criteria = {
      where:  {},
      raw:  true
    };

    DerivativeService.getDerivativeType(req.params.mkt_type)
    .then((res) =>  {
      console.log(res);
      criteria.where.DATAPREG = req.app.settings.stock_negotiation_date;
      criteria.where.TIPMERC = res.type_code;

      if (req.params.stock_prefix) {
        if (req.params.stock_prefix !== '') {
            criteria.where.CODPREFIX = req.params.stock_prefix;
        }
      }

      return StockNegotiations.findAll(criteria);
    })
    .then((negotiations) => {
      return res.status(200).json(negotiations);
    })
    .catch((err)  =>  {
      return res.status(500).json(err);
    });
  },
  getNegotiationDate : (req, res) => {
    StockNegotiationService.getNegotiationDate()
    .then((res) =>  {
      res.status(200).json(res[0].stock_negotiation_date);
    })
  }
};

module.exports = StockNegotiationController;
