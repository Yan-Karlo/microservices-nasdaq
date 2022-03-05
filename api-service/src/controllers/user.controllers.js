const UserService = require('../services/user.services');
module.exports = class UserController {
  constructor() {
    this.service = new UserService();
  }

  ping = (req, res) => res.status(200).json(this.service.ping());

  register = async (req, res) => {
    const response = await this.service.register(req.body);
    return res.status(response.status ?? 200).json(response);
  }

  signin = async (req, res) => {
    const response = await this.service.signin(req.body);

    return res.status(response.status ?? 200).json(response);
  }

  resetPassword = async (req, res) => {
    const { email } = req.params;
    const response = await this.service.resetPassword(email);

    return res.status(response.status ?? 200).json(response);
  }

  getUserHistory = async (req, res) => {
    const { userId } = req.params
    const response = await this.service.getUserHistory(userId);

    return await res.status(response.status ?? 200).json(response)
  }
}