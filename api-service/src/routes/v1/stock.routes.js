const StockController = require('../../controllers/stock.controllers');
const auth = require('../../../middlewares/authentication/jwt.authentication')
const authorization = require('../../../middlewares/authorization/role.authorization')

module.exports = class UserRoute {
  constructor(router, routeVersion) {
    this.path = `/${routeVersion}/stocks`;
    this.router = router;
    this.controller = new StockController();
    this.router.get(`${this.path}/ping`, this.controller.ping);
    this.router.post(`${this.path}/get-stock/:stockCode`, this.controller.getStock);
    this.router.get(`${this.path}/stats`,auth.checkAuthentication, authorization.isSuperUser, this.controller.getStats);
  }
}