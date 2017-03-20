var mysql = require("mysql");
var conexion = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Andy94",
    database: "tienda"
});
module.exports = {
    conexion: function(){
        if(arguments[0] === true)
            conexion.connect();
        else
            conexion.end();
    }
};