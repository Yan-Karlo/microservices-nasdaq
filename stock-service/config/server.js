const config = require('./config')[process.env.NODE_ENV];
const ServerEngine = require('./server-engine');

module.exports =  class Server {
  constructor({ environment = 'development', port = 3000 } = {environment: 'development', port : 3000}) {
    this.environment = environment;
    this.serverEngine = new ServerEngine(port);
  }

  start() {
    this.serverEngine.start();
  }

  stop() {
    this.serverEngine.stop();
  }
}