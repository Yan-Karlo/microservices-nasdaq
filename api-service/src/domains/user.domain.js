const emailValidator = require('email-validator')
module.exports = class User {
  constructor(user) {
    this.email = user ? user.email : null;
    this.role = user ? user.role : null;
    this.password = null;
  }

  async isValid(x) {
    console.error(x)
    return
      this.email &&
      this.role &&
      await emailValidator.validate(this.email);
  }
};
