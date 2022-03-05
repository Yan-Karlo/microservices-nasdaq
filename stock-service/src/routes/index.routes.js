/* eslint-disable linebreak-style */
const express = require('express');
const StockRoute = require('./v1/stock.routes');

const router = express.Router();
const version = 'v1'

const stockRoute = new StockRoute(router, version);

module.exports = router;
