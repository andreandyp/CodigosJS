var FacebookStrategy = require('passport-facebook').Strategy;
var claves = require("./claves");
//var base = require("./Base.js");

module.exports = function(passport){
    passport.serializeUser(function(usuario, done) {
        console.log("Usuario serializado");
        done(null, usuario);
    });

     passport.deserializeUser(function(usuario, done) {
        console.log("Usuario deserializado");
        done(null, usuario);
    });

    var datosFB = {clientID: claves.facebook.id,clientSecret: claves.facebook.secret,callbackURL: '/facebook/listo',profileFields: ['id', 'displayName', 'link', 'emails']}
    passport.use(new FacebookStrategy(datosFB,function(accessToken, refreshToken, perfil, done) {
        //var usuario = base.buscar("select * from usuario where id = ?",[perfil.id]);
        var usuario = undefined;
        if(usuario)
            return done(null,usuario);
        else
            return done(null,false,{id:perfil.id,nombre: perfil.displayName,correo: perfil.emails[0].value});        
            
    }));
};