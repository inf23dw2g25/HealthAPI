const swaggerJSDoc = require("swagger-jsdoc");
require("./environmentController");
// swaggerSpecs.js

const swaggerDefinition = {
  openapi: "3.0.0",
  info: {
    title: "HealthApi",
    version: "1.0.0",
    description: "Consultas e Históricos",
    contact: { name: "Grupo 25" },
  },
  servers: [
    {
      url: `${process.env.PROTOCOL}://${process.env.HOSTNAME}:${process.env.NODE_PORT}`,
      description: `${process.env.ENV} mode Server.`,
    },
  ],
  components: {
    securitySchemes: {
      google_oauth: {
        type: "oauth2",
        description: "Google OAuth",
        flows: {
          authorizationCode: {
            authorizationUrl: "https://accounts.google.com/o/oauth2/v2/auth",
            tokenUrl: "https://www.googleapis.com/oauth2/v4/token",
            scopes: {
              email: "Aqui tera acesso ao email do utilizador",
              profile: "Aqui tera acesso ao perfile do utilizador",
            },
          },
        },
      },
    },
  },
  security: [{ google_oauth: [] }],
};

const swaggerOptions = {
  swaggerDefinition,
  apis: ["./docs/**/*.yaml"], // Substitua pelo caminho correto para seus arquivos YAML
};

const swaggerSpec = swaggerJSDoc(swaggerOptions);

module.exports = swaggerSpec;
