const express = require('express');
const passport = require('passport');
const session = require('express-session');
const middleware = require('./controllers/middlewareController');
const checkSwaggerAuth = require('./controllers/swaagerMiddleware');
const authRoute = require('./routes/authRoute');
const protectedController = require('./controllers/protectedController');
const swaggerUI = require('swagger-ui-express');
const swaggerSpec = require('./controllers/swaggerSpecsController');
const consultaRoutes = require('./routes/consultaRoute');
const especialistaRoutes = require('./routes/especialistaRoute');
const especialidadeRoutes = require('./routes/especialidadeRoute');
const historicoRoutes = require('./routes/historicoRoute');
const pacienteRoutes = require('./routes/pacienteRoute');

const bodyParser = require('body-parser');

require('./controllers/environmentController');
require('./Strategies/googleStrategy');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/docs',swaggerUI.serve, swaggerUI.setup(swaggerSpec));

app.use(session({ secret: process.env.SESSION_SECRET}));
app.use(passport.initialize());
app.use(passport.session());

app.use('/', authRoute);
app.use('/', checkSwaggerAuth, consultaRoutes);
app.use('/', checkSwaggerAuth, especialidadeRoutes);
app.use('/', checkSwaggerAuth, especialistaRoutes);
app.use('/', checkSwaggerAuth, historicoRoutes);
app.use('/', checkSwaggerAuth, pacienteRoutes);
app.use('/protected', middleware, protectedController.getProtectedResource);


app.listen(process.env.NODE_PORT, ()=> console.log("listening on: " + process.env.NODE_PORT))