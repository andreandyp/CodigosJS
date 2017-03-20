var FacebookStrategy = require('passport-facebook').Strategy;
var claves = require("./claves");

module.exports = function(passport){
    passport.serializeUser(function(user, done) {
        done(null, user);
    });

     passport.deserializeUser(function(obj, done) {
        done(null, obj);
    });

    var datosFB = {clientID: claves.facebook.id,clientSecret: claves.facebook.secret,callbackURL: '/facebook/listo',profileFields: ['id', 'displayName', 'link', 'emails']}
    passport.use(new FacebookStrategy(datosFB,function(accessToken, refreshToken, profile, done) {
        console.log(profile.id);
        console.log(profile.displayName);
        console.log(profile.emails[0].value);
        
        return done(null, {hola:"hola"});
    }));
};