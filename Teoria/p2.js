function validarExpreg() {
	var expreg = /^[A-Z](A|E|I|O|U)[A-Z][A-Z][0-9][0-9](1[0-2]|0[0-9])([0-2][0-9]|3[0-1])(H|M)([A-D]|G|H|J|[M-Q]|S|T|V|Y|Z)(C|[F-H]|[L-N]|P|[R-T]|X|Z)[A-Z][A-Z][A-Z]([0-9][0-9])$/;
	if(expreg.test(arguments[0].toUpperCase()) === false)
		resultados(arguments[0],false);
	else
		resultados(arguments[0],true);
}
function resultados() {
	var texto = document.createElement("p");
	if(arguments[1] === true){
		texto.appendChild(document.createTextNode("La cadena "+arguments[0]+" sí coincide con la expresión regular"));
	}
	else{
		texto.setAttribute("style","color: red;");
		texto.appendChild(document.createTextNode("La cadena "+arguments[0]+" no coincide con la expresión regular"));	
	}
	document.getElementById('resultados').appendChild(texto);
}