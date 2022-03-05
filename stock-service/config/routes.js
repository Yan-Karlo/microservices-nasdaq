const indexRoutes =  require('../src/routes/index.routes');

module.exports = (app) =>{

    app.use(`/`,indexRoutes);
}