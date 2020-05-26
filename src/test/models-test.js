/**
 * Arquivo: model-test.js
 * Author: Vanderci Curvelo Junior
 * Description: test for the models
 * Data: 02/05/2020
 *
 * Documentação: http://chaijs.com/guide/styles/#assert
 *
 */
'use strict';

const { expect }       = require('chai');
const SequelizeMock    = require('sequelize-mock');
const dbMock = new SequelizeMock();

describe('Test Derivatives model', () => {
  const DerivativeMock = dbMock.define('derivatives', {
    id          : 1,
    option_code : 'GGBRE11',
    stock_code  : 'GGBR4',
    type        : '070',
    style       : 'AMER',
    exercise_price  :  11,
    exercise_date   : '2020-05-18',
    serie           : ''
  });

  const StockNegotiationMock = dbMock.define('stock_negotiations', {
    id          : 1,
    TIPREG  : 
    DATAPREG  :
    CODBDI  :
    CODNEG  :
    TIPMERC :
    NOMERES :
    ESPEC :
    PRAZOT  :
    MODREF  :
    OPENPRICE :
    MAXPRICE  :
    MINPRICE  :
    MIDPRICE  :
    CLOSEPRICE  :
    OFCPRICE  :
    OFVPRICE  :
    TOTNEG  :
    QUATOT  :
    TOTVOLUME :
    EXEPRICE  :
    INDOPC  :
    DATAVENC  :
    FATCOT  :
    PTOEXE  :
    CODISI  :
    DISMES  :
  });

  context('Find an existent Derivative', () => {
    it('called Derivative.findOne', (done) => {
      DerivativeMock.findOne({
        where : { option_code : 'GGBRE11' }
      })
      .then((derivative) => {
        console.log(derivative);
      });
      done();
    });
  });

  context('Find last Stock Negotiatione', () => {
    it('called Derivative.findOne', (done) => {
      StockMock.findOne({
        where : { option_code : 'GGBRE11' }
      })
      .then((derivative) => {
        console.log(derivative);
      });
      done();
    });
  });
});
