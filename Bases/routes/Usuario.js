var express = require('express');
var router = express.Router();
var base = require("./baseM");

router.get("/",function(req,res,next){
    base.conexion(true);
    var datos = {titulo: "Hola",nombre: "Gisela",usuario: "andreandyp"}
    res.render("usuario",datos);
});

router.post("/subir",function(req,res){
    console.log(req.body.valor);
})

/*router.get("/cosa",function(req,res){
    res.render("usuario",{titulo: "hue",nombre: "Sirve"});
});*/

module.exports = router;