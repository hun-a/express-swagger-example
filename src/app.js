const express = require('express');
const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUI = require('swagger-ui-express');
const API_V0 = require('./routes/v0');

const app = express();

const swaggerDefinition = {
  info: {
    title: 'Swagger Test',
    version: '1.0.0',
    description: 'Endpoints to test the user registration routes',
  },
  host: 'localhost:4000',
  basePath: '/',
  securityDefinitions: {
    bearerAuth: {
      type: 'apiKey',
      name: 'Authorization',
      scheme: 'bearer',
      in: 'header',
    },
  },
};

const swaggerSpec = swaggerJSDoc({
  swaggerDefinition,
  apis: ['./src/routes/v0/*.js', './src/models/*.js'],
});

app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerSpec));

app.get('/', (req, res, next) => {
  res.send('Hello Swagger!');
});

app.use('/api', API_V0);

module.exports = app;
