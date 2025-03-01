const { serve, setup } = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

module.exports = (app) => {
  app.use('/api-docs', serve, setup(swaggerDocument));
};