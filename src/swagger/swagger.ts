import swaggerJsDoc from "swagger-jsdoc";

/*
  Open API
  - https://swagger.io/docs/specification/about
  - https://swagger.io/specification
*/

const url = 'http://localhost:4000';

const swaggerDefinition = {
  info: {
    contact: {
      email: 'jmbl1685@hotmail.com',
      name: 'Juan Batty',
    },
    description: 'Custom structure to build an REST API using Express.js',
    license: {
      name: 'All Rights Reserved',
    },
    title: 'Custom structure to build an REST API using Express.js',
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
      tags: ['auth','questionBlock','exam','user'],
    },
  ],
  components: {
    securitySchemes: {
      cookieAuth: {
        description: 'Cookie authentication',
        in: 'cookie',
        name: 'token',
        type: 'apiKey',
      },
    },
  },
};

const route = ["./src/routes/**/*.ts"];

const apis = route;

const options = {
  apis,
  basePath: '/',
  swaggerDefinition,
};

export const swaggerOptions  = options;