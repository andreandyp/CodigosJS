function valido(){
    var cadena = document.getElementById("cadena").value;
    if(!cadena){
        alert("Cadena inválida");
    }else{
        S(cadena);
    }
}

function S(cadena){
    if(cadena === "nil"){
        alert("Cadena válida");
        return;
    }

    var cs = A(cadena,0,'c');
    var ds = A(cadena,cs,'d');

    if (cs !== (ds-cs)) {
        alert("Cadena inválida");
    }else{
        alert("C's encontradas = "+cs+"\nD's encontradas: "+(ds-cs));
    }
}

function A(cadena,num,caracter){
    if(cadena.charAt(num) !== caracter){
        return num;
    }
    else{
        return A(cadena,num+1,caracter);
    }
}