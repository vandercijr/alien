'use strict';

function load() {
  const fs = require('fs')

  let rawconfig = fs.readFileSync('./configs/dbconfig.json');

  return JSON.parse(rawconfig);
}

module.exports = {
    load : load
}
