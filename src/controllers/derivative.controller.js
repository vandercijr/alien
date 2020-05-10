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
const Derivatives  = require('../models/Derivatives.js')(db, DataTypes);

const DerivativeController = {
  getOne : (req, res) => {
    Derivatives.findOne({
      where : {
        derivative_code : req.params.symbol
      }
    })
    .then((derivative)  =>  {
      return res.status(200).json(derivative);
    });
  }
};

module.exports = DerivativeController;
