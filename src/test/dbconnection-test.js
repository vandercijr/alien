/**
 * Arquivo: dbconnection-test.js
 * Author: Vanderci Curvelo Junior
 * Description: test for the file : 'dbconnection.js'
 * Data: 02/05/2020
 *
 * Documentação: http://chaijs.com/guide/styles/#assert
 *
 */
'use strict';

const Chai      = require('chai');
const assert    = Chai.assert;
const DBConfig  = require('../configs/dbconfig.js');
const DB        = require('../connection/db.js');

describe('Test database connection', () => {
  it('Should open connection config file', () => {
    const dbconfig = DBConfig.load();

    assert.isObject(dbconfig, 'is a json object');
  });

  it('Should connect database', () => {
    const db = DB.connect();

    db
    .authenticate()
    .then(() => {
      console.log('Connection has been established successfully.');
    })
    .catch(err => {
      console.error('Unable to connect to the database:', err);
    });
  });
});
