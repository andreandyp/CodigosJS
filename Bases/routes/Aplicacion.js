var express = require('express');
var router = express.Router();

router.get("/",function(req,res,next){
    var datos = {
        titulo: "Twitter",
        nombre:"Twitter",
        vendedor:"Twitter Inc.",
        desc:"Twittea con amiguitos",
        version: "5.0.1",
        idioma: "Español",
        intereses: "Social, Entretenimiento",
        comentarios:[{
            usuario: "andreandyp",
            fecha: "30/09/2916",
            voto: true,
            reseña: "Esta muy chida"
        },{
            usuario: "gisele",
            fecha: "07/05/2916",
            voto: false,
            reseña: "Esta culera"
        }
        ]
    }
    res.render("app",datos);
});

module.exports = router;