import swaggerJsDoc from "swagger-jsdoc";

/*
  Open API
  - https://swagger.io/docs/specification/about
  - https://swagger.io/specification
*/

const url = 'http://localhost:4000';

const swaggerDefinition = {
  info: {
    description: 'This is the API documentation for the SPUN API',
    license: {
      name: 'All Rights Reserved',
    },
    title: 'SPUN API',
  },
  openapi: '3.0.0',
  produces: ['application/json'],
  servers: [{ url }],
  tags: [
    {
      description: 'auth',
      name: 'auth',
    },
  ],
  'x-tagGroups': [
    {
      name: 'General',
      tags: ['auth','questionBlock','exam'],
    },
  ],

};

const route = ["./src/routes/**/*.ts"];
const apis = route;
const options = {
  apis,
  basePath: '/',
  swaggerDefinition,
};

export const swaggerOptions  = options;