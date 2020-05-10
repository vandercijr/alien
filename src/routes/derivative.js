'user strict'

const express = require('express');
const router  = express.Router();
const DerivativeController  = require('../controllers/derivative.controller.js');

router.get('/:symbol', DerivativeController.getOne);

module.exports = router;
