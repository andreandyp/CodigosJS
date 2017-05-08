var r = 0;

//Agregar mas reglas cada vez que se presiona el botón
//Siendo sincero, con jQuery se puede en 2 o 3 líneas :P
function agregar() {
    var nuevaL = document.createElement("label");
    var br = document.createElement("br");
    document.getElementById(String.fromCharCode(65 + r)).insertAdjacentElement("afterend", br);
    document.getElementsByTagName("br")[r + 1].insertAdjacentElement("afterend", nuevaL);
    var nuevaI = document.createElement("input");
    nuevaI.setAttribute("type", "text");
    ++r;
    nuevaI.setAttribute("id", String.fromCharCode(65 + r));
    nuevaL.setAttribute("for", String.fromCharCode(65 + r));
    nuevaL.appendChild(document.createTextNode(String.fromCharCode(65 + r) + " -> "));
    nuevaL.insertAdjacentElement("afterend", nuevaI);
}

function transformar() {
    var reglas = {};
    //Obtener las reglas y sus producciones
    for (let i = 0; i <= r; i++) {
        var prod = document.getElementById(String.fromCharCode(65 + i)).value;
        if(!prod){
            alert("Existe una regla vacía");
            return;
        }
        reglas[String.fromCharCode(65 + i)] = prod.split("|");
    }

    for (let produccion in reglas) {
        for (let i = 0; i < reglas[produccion].length; i++) {
            //Obtener produccion a sustituir
            var sustituible = reglas[produccion][i].charAt(0);
            //Verificar si es una letra minúscula
            if (sustituible.charCodeAt(0) >= 97 && sustituible.charCodeAt(0) <= 122) {
                continue;
            }
            //Si es mayúscula, derivar y agregar a la lista de producciónes
            for (let j = 0; j < reglas[sustituible].length; j++) {
                var nueva = reglas[sustituible][j] + reglas[produccion][i].charAt(1);
                nueva += reglas[produccion][i].charAt(2) ? reglas[produccion][i].charAt(2) : "";
                reglas[produccion].push(nueva);
            }
        }
    }

    //Eliminar producciónes ya derivadas buscándolas con expregs
    var forma1 = /^[A-Z][A-Z]$/;
    var forma2 = /^[A-Z][A-Z][A-Z]$/;
    for (let produccion in reglas) {
        var prod = reglas[produccion][0];
        while (forma1.test(prod) || forma2.test(prod)) {
            reglas[produccion].shift();
            var prod = reglas[produccion][0];
        }
    }
    alert("Gramática en FNG: " + JSON.stringify(reglas));
}