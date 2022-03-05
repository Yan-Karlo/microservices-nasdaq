require('dotenv').config();
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

const Database = require('./config/database');
const Server = require('./config/server');
const config = require('./config/config')[process.env.NODE_ENV];
const DBEngine = require(config.dbEngine);

console.clear();

const database = new Database(config.dns, new DBEngine());
const server = new Server({
  environment: process.env.NODE_ENV,
  port: config.port
})

database.start().then(() => {
  server.start();
});
