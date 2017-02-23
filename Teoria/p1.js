function analizar() {
	var cadena1 = document.getElementById('cadena1').value.toLowerCase();
	var cadena2 = document.getElementById('cadena2').value.toLowerCase();
	var res = document.getElementById('res');
	res.innerHTML = "Análisis de cadenas: ";
	var pcad1 = palindromos(cadena1);
	res.innerHTML += pcad1?"<br>Cadena 1: Es palindromo":"<br>Cadena 1: No es palindromo";
	var pcad2 = palindromos(cadena2);
	res.innerHTML += pcad2?"<br>Cadena 2: Es palindromo":"<br>Cadena 2: No es palindromo";
	res.innerHTML += "<br>Longitud cadena 1: "+cadena1.length;
	res.innerHTML += "<br>Longitud cadena 2: "+cadena2.length;
	res.innerHTML += "<br>Cadenas concatenadas: "+cadena1+cadena2;
	res.innerHTML += pcad1?"":"<br>Cadena 1 invertida: "+invertir(cadena1);
	res.innerHTML += pcad2?"":"<br>Cadena 2 invertida: "+invertir(cadena2);
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
function invertir(cad) {
	var reversa = "";
	for (var i = cad.length - 1; i >= 0; i--) {
		reversa += cad[i];
	}
	return reversa;
	alert(reversa);
}