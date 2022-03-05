const express = require('express');
const cors = require('cors');
const routes = require('./routes');
const path = require('path');
const httpServer = require('http');

module.exports = class ServerEngine{

    constructor(port) {
        this.port = port || 3000;
        this.isRunning = false;
        this.app = express();
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: true }));
        this.app.use(express.static(path.join(__dirname, 'public')))
        this.app.use(cors());
        //loading routes
        routes(this.app);
      this.engine = httpServer.createServer(this.app);
    }

    start = () => {
        this.engine.listen(this.port, console.log(`Listening on http://localhost:${this.port}`));
        this.isRunning = true;
    }

    stop = () => {
        this.engine.close();
    }
}