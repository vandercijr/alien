const Sequelize = require('sequelize');
const DBConfig  = require('../configs/dbconfig.js');

function connect() {
  const dbconfig = DBConfig.load();

  return new Sequelize(
    dbconfig.database,
    dbconfig.user,
    dbconfig.password,
    {
      'host'    : dbconfig.host,
      'dialect' : dbconfig.driver
    }
  );
}

module.exports = {
  connect : connect
}
