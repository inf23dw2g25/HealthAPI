const swaggerJSDoc = require("swagger-jsdoc");
require('./environmentController');
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
        OAuth2: {
          type: "oauth2",
          flows: {
            implicit: {
              authorizationCode: {
                authorizationUrl: "http://localhost:3000/auth/google?scope=email",
                scopes: {
                  mail: "Aqui tera acesso ao email do utilizador",
                  profile: "Aqui tera acesso ao perfile do utilizador",
                  read: "Para ler os recursos ",
                  write: "Para escrever nos recursos"
                },
              },
            },
          },
        },
      },
    },
    security: [{ OAuth2: [] }],
  };
  
  const swaggerOptions = {
    swaggerDefinition,
    apis: ["./docs/**/*.yaml"], // Substitua pelo caminho correto para seus arquivos YAML
  };
  
const swaggerSpec = swaggerJSDoc(swaggerOptions);

module.exports = swaggerSpec;
