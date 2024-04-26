const express = require('express');
const passport = require('passport');
const session = require('express-session');
const middleware = require('./controllers/middlewareController');
const authRoute = require('./routes/authRoute');
const protectedController = require('./controllers/protectedController');

require('./controllers/environmentController');
require('./Strategies/googleStrategy');

const app = express();
app.use(session({ secret: process.env.SESSION_SECRET}));
app.use(passport.initialize());
app.use(passport.session());

app.use('/', authRoute);
app.use('/protected', middleware, protectedController.getProtectedResource);

app.listen(process.env.NODE_PORT, ()=> console.log("listening on: " + process.env.NODE_PORT))