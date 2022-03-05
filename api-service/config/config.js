module.exports = {
  development: {
    port: 3001,
    dns: `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.ojkcx.mongodb.net/code_challenge`,
    dbEngine: './config/db_engines/mongoDB.db_engine',
    loginRequired: true,
    jwt: { secretKey: process.env.ACCESS_TOKEN_SECRET_KEY },
    email: {
      from: process.env.EMAIL_USER,
      password: process.env.EMAIL_PASSWORD
    },
  },
  test: {
    port: 3001,
    dns: 'mongodb://localhost:27017/xxx_db',
    dbEngine: './config/db_engines/test.db_engine',
    loginRequired: true,
    jwt: { secretKey: process.env.ACCESS_TOKEN_SECRET_KEY },
    email: {
      from: process.env.EMAIL_USER,
      password: process.env.EMAIL_PASSWORD
    },
  },
};
