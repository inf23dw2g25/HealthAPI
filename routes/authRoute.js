const express = require('express');
const passport = require('passport');
const router = express.Router();

router.get('/', (req,res) =>{
    res.send('<a href="/auth/google?scope=email"> Entre com o Google')
});

router.get('/auth/google', 
    passport.authenticate('google',{scope: ['email','profile']})
)
router.get('/google/callback',
    passport.authenticate('google', {
        successRedirect: '/protected',
        failureRedirect:'/auth/failure'
    })
)
router.get('docs/oauth2-redirect',
    passport.authenticate('google', {
        successRedirect: '/docs',
        failureRedirect:'/auth/failure'
    })
)
router.get('/auth/failure', (req,res) =>{
    res.send('Algo deu errado');
})

module.exports = router;