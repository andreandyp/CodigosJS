var r = 0;

function agregar() {
    var nuevaL = document.createElement("label");
    var br = document.createElement("br");
    document.getElementById("R"+r).insertAdjacentElement("afterend",br);
    document.getElementsByTagName("br")[r+1].insertAdjacentElement("afterend",nuevaL);
    var nuevaI = document.createElement("input");
    nuevaI.setAttribute("type","text");
    ++r;
    nuevaI.setAttribute("id","R"+r);
    nuevaL.setAttribute("for","R"+r);
    nuevaL.appendChild(document.createTextNode("R"+r+"->"));
    nuevaL.insertAdjacentElement("afterend",nuevaI);
}