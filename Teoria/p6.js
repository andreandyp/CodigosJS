var trans = 1;
var pila = [];
//Con jQuery esto queda en 2 líneas :P
function masTrans() {
    nuevaTrans = document.createElement("input");
    nuevaTrans.setAttribute("type","text");
    nuevaTrans.setAttribute("id","S"+(trans+1));
    document.querySelector("#S"+trans).insertAdjacentElement("afterend",nuevaTrans);
    ++trans;
    document.querySelector("#S"+trans).insertAdjacentElement("beforebegin",document.createElement("br"));
}

function verif(){
    pila = [];
    var automata = {};
    var cadena = document.getElementById("cadena").value;
    //Obtener la séptupla del usuario y guardarla en un objeto
    automata.Q = document.getElementById("Q").value.split(",");
    automata.E = document.getElementById("E").value.split(",");
    automata.L = document.getElementById("L").value.split(",");
    for(let n = 1; n <= trans; n++){
        automata["S"+n] = document.getElementById("S"+n).value.split(",");
    }
    automata.q0 = document.getElementById("q0").value;
    automata.F = document.getElementById("F").value.split(",");
    automata.Z0 = document.getElementById("Z0").value;
    
    //Depuracion
    console.log(JSON.stringify(automata));
    /*var automata = JSON.parse('{"Q":["q0","q1","q2"],"E":["a","b"],"L":["A","B","C"],"S1":["q0","a","C","q1","A","C"],"S2":["q0","b","C","q1","B","C"],"S3":["q1","p","C","q0","p","C"],"S4":["q0","p","C","q2","p","p"],"S5":["q1","a","A","q1","A","A"],"S6":["q1","b","B","q1","B","B"],"S7":["q1","a","B","q1","p","p"],"S8":["q1","b","A","q1","p","p"],"q0":"q0","F":["q2"],"Z0":"C"}');
    var cadena = "aaacbbb";
    trans = 8;*/
    
    //Ejecutar autómata de pila
    var result = ejecutar(automata,cadena);
    if(result === true)
        alert("Cadena aceptada por el autómata");
    else
        alert("Cadena NO aceptada por el autómata");
    alert("Pila: "+pila);
}

function ejecutar(automata,cadena){
    var estAct = automata.q0;
    pila.push(automata.Z0);
    var car = 0;
    var bloque = true;
    //Si se ejecuta el bloque de abajo y si no encuentra al estado actual en los estados finales
    while(bloque == true && automata.F.indexOf(estAct) == -1){
        bloque = false;
        for(let n = 1; n <= trans; n++){
            let tran = automata["S"+n];
            //Cadena[car] puede devolver undefined si ya se acabó la cadena
            //Entonces, si aun hay cadena por leer: true || false = true
            //Si ya no hay cadena: false || true = true
            //Si el caracter no pertenece al alfabeto: false || false = false
            if(tran[0] == estAct && (cadena[car] == tran[1] || tran[1] == "p") && (pila[pila.length - 1] == tran[2] ||tran[2] == "p") && (automata.E.indexOf(cadena[car]) != -1 || cadena[car] === undefined)){
                estAct = tran[3];
                (tran[4] != "p"?pila.push(tran[4]):null);
                (tran[5] == "p"?pila.pop():null);
                bloque = true;
                break;
            }else{
                continue;
            }
        }
        ++car;
    }
    return bloque;
}