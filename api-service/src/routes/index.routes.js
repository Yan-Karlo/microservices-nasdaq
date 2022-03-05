/* eslint-disable linebreak-style */
const express = require('express');
const UserRoute = require('./v1/user.routes');
const StockRoute = require('./v1/stock.routes');
const Seeding = require('./v1/seeding.routes');
const swaggerUI = require('swagger-ui-express');
const swaggerDocument = require('./v1/documentation/swagger.json');

const router = express.Router();
const version = 'v1'

router.use('/doc', swaggerUI.serve, swaggerUI.setup(swaggerDocument))


new UserRoute(router, version);
new StockRoute(router, version);
new Seeding(router, version);

module.exports = router;
