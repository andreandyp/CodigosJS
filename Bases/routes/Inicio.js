var express = require('express');
var router = express.Router();

router.get("/",function(req,res){
    if(req.isAuthenticated())
        res.render("");
    else
        res.render("inicio");
});

module.exports = router;