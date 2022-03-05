const UserModel = require('../models/user.model');
const HistoryModel = require('../models/history.model');
var mongoose = require('mongoose');
module.exports = class UserRepository {
  constructor() {
    this.user = null;
  }

  ping = () => 'pong'

  register = async (user) => {
      const newUser = new UserModel(user);

      return await newUser.save();
  }

  getUserByEmail = async (email) => {
    return await UserModel.findOne({ email }).lean();
  }

  resetPassword = async (user) => {
    return await UserModel.updateOne(
      { email: user.email },
      { password: user.password }
    )
  }

  getUserHistory = async (userId) => {
    userId = mongoose.Types.ObjectId(userId);

    return await HistoryModel.find({ userId }).sort({ createdAt: -1 }).lean();
  }

}