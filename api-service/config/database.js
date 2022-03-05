module.exports = class Database {
  constructor(dns, engine) {
    this.isRunning = false;
    try {
      if (!dns) {
        throw new Error('String connection is missing.');
      }

      if (!engine) {
        throw new Error('A database engine must be passed as a parameter.');
      }
    } catch (error) {
      console.error(error);
    }

    this.dns = dns;
    this.engine = engine;
  }

  async start() {
    console.log('Trying to connect with the database...');

    await this.engine.connect(this.dns).then(() => {
      console.log('The database is connected.');
      this.isRunning = true;
    }).catch((err) => {
      console.error('An error occurred.');
      console.error(`Error message: ${err.message}`);
      this.isRunning = false;
    });
  }

  async stop() {
    this.isRunning = false;
  }
};
