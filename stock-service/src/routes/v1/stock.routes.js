const StockController = require('../../controllers/stock.controllers');

module.exports = class UserRoute {
  constructor(router, routeVersion) {
    this.path = `/${routeVersion}/stocks`;
    this.router = router;
    this.controller = new StockController();
    this.router.get(`${this.path}/ping`, this.controller.ping);
    this.router.get(`${this.path}/get-stock/:stockCode`, this.controller.getStock);
  }
}