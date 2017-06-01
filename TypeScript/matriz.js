var teclado = [[1,2,3,'A'],[4,5,6,'B'],[7,8,9,'C'],['.',0,'#','D']];
var resultado = "";
for(let i = 0; i <= 3; i++){
    for(let j = 0; j <= 3; j++){
        resultado += teclado[i][j] + "\t";
    }
    resultado += "\n";
}

console.info(resultado);

var imprime = (nombre,edad) => {
    console.log("Hola "+nombre+", tienes "+edad+" años");
}

imprime("Andy",19);