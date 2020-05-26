'user strict'

const express = require('express');
const router  = express.Router();
const DerivativeController  = require('../controllers/derivative.controller.js');
const StockNegotiationController  = require('../controllers/stock.negotiation.controller.js');

router.get('/negotiation/:mkt_type/:stock_prefix*?', StockNegotiationController.getAll);
router.get('/negotiation/last', StockNegotiationController.getNegotiationDate);
router.get('/:symbol', DerivativeController.getOne);

module.exports = router;
