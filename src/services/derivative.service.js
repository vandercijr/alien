/**
 * Arquivo: derivative.service.js
 * Author: Vanderci Curvelo Junior
 * Description: service for derivative info : 'derivative.service.js'
 * Data: 23/05/2020
 *
 * Documentação: http://chaijs.com/guide/styles/#assert
 *
 */
const { db, DataTypes, QueryTypes }  = require('../connection/db.js');
const DerivativesTypes   = require('../models/DerivativesTypes.js')(db, DataTypes);

const DerivativeService = {
  getDerivativeType : (type) => {
    return DerivativesTypes.findOne({
        where:  {
          type: type
        },
        raw: true
    })
  }
};

module.exports = DerivativeService;
