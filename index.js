const express = require('express');
const dotenv = require("dotenv");
const path = require("path");

dotenv.config({
    path: path.resolve(__dirname, ".env")
});

const app = express();

app.get('/', (req,res) =>{
    res.send('<a href="/auth/google"> Entre com o Google')
});

app.get('/protected', (req,res)  =>{
    res.send('Rota Protegida , Parabéns estás Authenticado');
})
app.listen(process.env.NODE_PORT, ()=> console.log("listening on: " + process.env.NODE_PORT))