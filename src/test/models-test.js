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
const SequelizeMock = require('sequelize-mock');
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

  context('Find an existent Derivative', () => {
    it('called Derivative.findOne', () => {
      DerivativeMock.findOne({
        where : { option_code : 'GGBRE11' }
      })
      .then((derivative) => {
        console.log(derivative);
      });
    });
  });
});
