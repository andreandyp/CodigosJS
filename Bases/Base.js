var mysql = require("mysql");
var conexion = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Andy94",
    database: "tienda"
});
conexion.connect(function(error){
    if(error)
        console.log(error);
});

var buscar = function(sql,parametros){
    conexion.query(sql,parametos,function(error,resultado){
        if(!error){
            return resultado;
        }
    });
}

module.exports = {
    buscar: buscar
};