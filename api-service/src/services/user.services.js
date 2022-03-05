const UserRepository = require('../repositories/user.repository');
const User = require('../domains/user.domain');
const {findError} = require('../../utils/errorList');
const config = require('../../config/config')[process.env.NODE_ENV];
const jwt = require('jsonwebtoken');
const key = require('../../utils/key')
const sendEmail = require('../../utils/sendEmail')
module.exports = class UserService {
  constructor() {
    this.repository = new UserRepository();
  }

  ping = () => this.repository.ping();

  register = async (user) => {
    const newUser = new User(user)
    if (newUser.isValid()) {
      try {
        const response = await this.repository.register(newUser);
        const { email, password } = response;
        return { email, password};

      } catch (err) {
        return findError('userRegistering', err.message);
      }
    } else {
      return findError('InvalidUserData');
    }
  }

  signin = async (signinData) => {
    const { email, password } = signinData;
    const user = await this.repository.getUserByEmail(email);

    if (!user || user.password !== signinData.password) {
      return findError('accessDenied');
    }

    if (password !== user.password) {
      return findError('accessDenied');
    }

    const token = jwt.sign(
      { id: user._id, role: user.role },
      config.jwt.secretKey,
      {
        expiresIn: 12 * 60 * 60 // expires in 12 hours
      }
    );
    return { token, email: user.email };
  }

  resetPassword = async (email) => {
    const user = await this.repository.getUserByEmail(email);

    if (!user) {
      return findError('emailDoesNotExist');
    }

    try {
      user.password = key.generate();
      await this.repository.resetPassword(user);

      await sendEmail({
        to: user.email,
        subject: 'Password Reset',
        text: `This is your new password:\n ${user.password}`,
      })

      return { status: 200 };

    } catch (error) {
      return findError('unexpectedError', error.message)
    }

  }

  getUserHistory = async (userId) => {
    try {
      const history = await this.repository.getUserHistory(userId);

      return history;

    } catch (error) {
      return findError('unexpectedError',
        'When getting the user history :' + error.message);
    }
  }

}