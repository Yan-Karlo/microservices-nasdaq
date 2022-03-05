const mongoose = require('mongoose');

module.exports = class MongoDBEngine {
  async connect(dns) {
    await mongoose.connect(dns, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true });
  }
};
