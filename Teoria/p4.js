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
    //Si las derivaciones de m son diferentes a las derivaciones de K
    //Caracteres desde donde empieza m - caracteres que ha contado desde n
    //Caracteres desde donde empieza k - caracteres que ha contado desde m
    if ((m-n)+n !== (k-m)) {
        alert("Cadena inválida");
    }else{
        alert("Derivaciones sobre A: "+n+"\nDerivaciones sobre B: "+(m-n)+"\nDerivaciones sobre A: "+(k-m));
    }
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