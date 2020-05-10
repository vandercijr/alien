/**
 * Arquivo: db-test.js
 * Author: Vanderci Curvelo Junior
 * Description: test for the file : 'db.js'
 * Data: 02/05/2020
 *
 * Documentação: http://chaijs.com/guide/styles/#assert
 *
 */
'use strict';

const Chai      = require('chai');
const assert    = Chai.assert;
const DBConfig  = require('../configs/dbconfig.js');
const { db  }   = require('../connection/db.js');

describe('Test database connection', () => {
  it('Should open connection config file', (done) => {
    const dbconfig = DBConfig.load();

    assert.isObject(dbconfig, 'is a json object');

    done();
  });

  it('Should connect database', (done) => {
    db
    .authenticate()
    .then((res) => {
      console.log('Connection has been established successfully.');

      done(res);
    })
    .catch(err => {
      console.error('Unable to connect to the database:', err);

      done(err);
    });
  });
});
