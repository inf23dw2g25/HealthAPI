const passport = require('passport');
const GoogleStrategy = require( 'passport-google-oauth2' ).Strategy;
const dotenv = require("dotenv");
const path = require("path");


dotenv.config({
    path: path.resolve(__dirname, "../.env")
});

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRT,
    callbackURL: process.env.GOOGLE_CALLBACK_URI,
    passReqToCallback   : true
  },
  function(request, accessToken, refreshToken, profile, done) {
      return done(null, profile);
  }
));

passport.serializeUser(function(user,done){
  done(null,user);
})
passport.deserializeUser(function(user,done){
  done(null,user);
})
