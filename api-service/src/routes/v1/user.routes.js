const UserController = require('../../controllers/user.controllers');
const auth = require('../../../middlewares/authentication/jwt.authentication')

module.exports = class UserRoute {
  constructor(router, routeVersion) {
    this.path = `/${routeVersion}/users`;
    this.router = router;
    this.controller = new UserController();
    this.router.get(`${this.path}/ping`, this.controller.ping);
    this.router.get(`${this.path}/history/:userId`, auth.checkAuthentication, this.controller.getUserHistory);
    this.router.post(`${this.path}/signin`, this.controller.signin);
    this.router.post(`${this.path}/register`, auth.checkAuthentication, this.controller.register);
    this.router.put(`${this.path}/reset-password/:email`, this.controller.resetPassword);
  }
}