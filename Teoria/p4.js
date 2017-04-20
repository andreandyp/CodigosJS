var pila = [];
function validar(){
    var expreg = /0+1+0{2,}/;
    var cadena = document.getElementById("cadena").value;
    if (expreg.test(cadena) === false) {
        alert("Cadena inválida");
    }else{
        S(cadena);
    }
}

function S(cadena){
    var n = A(cadena,0);
    var m = B(cadena,n+1);
    var k = A(cadena,m+1);
}

function A(cadena,pos){
    //A -> 0A | 0
    if(cadena.charAt(pos) !== "0"){
        return pos;
    }
    else{
        return A(cadena,pos+1);
    }
        
}

function B(cadena,pos){
    //B -> 1B | 1
    if(cadena.charAt(pos) !== "1"){
        return pos;
    }
    else{
        return B(cadena,pos+1);
    }
}