var div = document.createElement("div");
var texto = document.createTextNode("Salida:");
div.style.color = "#FFFFFF";
div.style.backgroundColor = "#000000";
div.style.position = "fixed";
div.style.width = "100%";
div.style.right = "0";
div.style.top = "0";
div.style.bottom = "0";
div.style.overflow = "auto";
div.style.fontFamily = "Lucida Console";
div.appendChild(texto);
div.appendChild(document.createElement('br'));
div.appendChild(document.createElement('br'));

document.addEventListener("DOMContentLoaded", function() { 
	var body = document.getElementsByTagName('body')[0];
	body.appendChild(div);
});

var limpiar = function(){
    div.textContent = "";
}
var imprimir = function() {
	var cadena = document.createTextNode(arguments[0]);
	div.appendChild(cadena);
	div.appendChild(document.createElement('br'));
}
var leer = function() {
	var respuesta = prompt(arguments[0],"");
	return (resultado === null)?"":respuesta;
}