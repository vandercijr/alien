/**
 * Arquivo: derivative-test.js
 * Author: Vanderci Curvelo Junior
 * Description: test derivative route / controller'
 * Data: 09/05/2020
 *
 * Documentação: http://chaijs.com/guide/styles/#assert
 *
 */
'use strict';

const Chai      = require('chai');
const chaiHttp  = require('chai-http');
const assert    = Chai.assert;
const should    = Chai.should();
const app       = require('../../server.js');

Chai.use(chaiHttp);

describe('Test derivative route', () => {
  it('Should get an derivative information as an object', (done) => {
    const derivative_symbol = 'GGBRE10';

    Chai.request(app)
    .get('/derivative/'+derivative_symbol)
    .end((err, res) => {
      if (err) done(err);
      // console.log()
      res.should.have.status(200);

      // Chai.expect(res).have.status(200);
      res.body.should.be.a('object');

      done();
    });
  });
});
