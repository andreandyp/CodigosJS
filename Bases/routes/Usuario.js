var express = require('express');
var router = express.Router();

router.get("/",function(req,res,next){
    console.log("Informacion");
    console.log(req.session.info.id);
    console.log(req.session.info.nombre);
    console.log(req.session.info.correo);
    res.render("usuario",{nombre: "Andy"});
});

/*router.post("/subir",function(req,res){
    console.log(req.body.valor);
});*/

module.exports = router;