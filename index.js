const express = require('express');
const passport = require('passport');
const session = require('express-session');
const middleware = require('./controllers/middlewareController')

require('./controllers/environmentController')
require('./Strategies/googleStrategy');

const app = express();
app.use(session({ secret: process.env.SESSION_SECRET}));
app.use(passport.initialize());
app.use(passport.session());

app.get('/', (req,res) =>{
    res.send('<a href="/auth/google"> Entre com o Google')
});

app.get('/auth/google', 
    passport.authenticate('google',{scope: ['email','profile']})
)

app.get('/google/callback',
    passport.authenticate('google', {
        successRedirect: '/protected',
        failureRedirect:'/auth/failure'
    })
)

app.get('/auth/failure', (req,res) =>{
    res.send('Algo deu errado');
})
app.get('/protected', middleware,(req ,res)  => {
    res.send('Rota Protegida , Parabéns estás Authenticado!!!');
});

app.listen(process.env.NODE_PORT, ()=> console.log("listening on: " + process.env.NODE_PORT))