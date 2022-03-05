process.env.NODE_ENV = process.env.NODE_ENV || 'development';

const Server = require('./config/server');
const config = require('./config/config')[process.env.NODE_ENV];

console.clear();

const server = new Server({
  environment: process.env.NODE_ENV,
  port: config.port
})

server.start();
