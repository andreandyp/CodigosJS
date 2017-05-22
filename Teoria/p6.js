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
    var automata = {};
    automata.Q = document.getElementById("Q").value.split(",");
    automata.E = document.getElementById("E").value.split(",");
    automata.L = document.getElementById("L").value.split(",");
    for(let n = 1; n <= trans; n++){
        automata["S"+n] = document.getElementById("S"+n).value.split(",");
    }
    automata.q0 = document.getElementById("q0").value;
    automata.F = document.getElementById("F").value.split(",");
    automata.Z0 = document.getElementById("Z0").value;

    console.log(JSON.stringify(automata));
    
    var cadena = document.getElementById("cadena").value;
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
    while(bloque == true && automata.F.indexOf(estAct) == -1){
        bloque = false;
        for(let n = 1; n <= trans; n++){
            let tran = automata["S"+n];
            if(tran[0] == estAct && (cadena[car] == tran[1] || tran[1] == "p") && (pila[pila.length - 1] == tran[2] ||tran[2] == "p" )){
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