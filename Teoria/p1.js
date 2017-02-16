function analizar() {
	var cadena1 = document.getElementById('cadena1').value.toLowerCase();
	var cadena2 = document.getElementById('cadena2').value.toLowerCase();
	var res = document.getElementById('res');
	palindromos(cadena1)?alert("Es palindromo"):alert("No es palindromo");
	palindromos(cadena2)?alert("Es palindromo"):alert("No es palindromo");
}
function palindromos(cad) {
	for (var i = 0, j = cad.length -1; i <= cad.length; i++, j--) {
		if(cad[i] == " ")
			++i;
		if(cad[j] == " ")
			--j;
		if(cad[i] != cad[j])
			return false;
	}
	return true;
}