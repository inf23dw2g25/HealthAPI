const swaggerJSDoc = require('swagger-jsdoc');

// Defina as opções de configuração para o Swagger
const options = {
  swaggerDefinition: {
    openapi: '3.0.0', // Versão do OpenAPI Specification
    info: {
      title: 'HealthApi',
      version: '1.0.0',
      description: 'Uma API de gestão de consultas',
    },
    servers: [
      {
        url: 'http://localhost:3000', // URL base da sua API
        description: 'Servidor local',
      },
    ],
  },
  // Caminho para os arquivos de código-fonte que contêm as rotas da API
  apis: ['./routes/*.js'],
};

// Gere as especificações do Swagger
const swaggerSpec = swaggerJSDoc(options);

// Exporte as especificações do Swagger
module.exports = swaggerSpec;
