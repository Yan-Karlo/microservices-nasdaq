const crypto = require('crypto');

module.exports.generate = () => crypto.randomBytes(64).toString('hex');
 