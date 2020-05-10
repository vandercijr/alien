const { Sequelize, DataTypes } = require('sequelize');
const DBConfig  = require('../configs/dbconfig.js');

const dbconfig = DBConfig.load();

module.exports =  {
  db : new Sequelize(
    dbconfig.database,
    dbconfig.user,
    dbconfig.password,
    {
      'host'    : dbconfig.host,
      'dialect' : dbconfig.driver
    }
  ),
  DataTypes : DataTypes
}
