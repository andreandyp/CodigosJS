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

	res.innerHTML += "<br>Prefijos de Cadena 1:";
	for(var i = 0; i <= cadena1.length; i++)
		res.innerHTML += "<br>P"+i+": "+cadena1.substring(0,i);

	res.innerHTML += "<br>Prefijos de Cadena 2:";
	for(var i = 0; i <= cadena2.length; i++)
		res.innerHTML += "<br>P"+i+": "+cadena2.substring(0,i);
	
	res.innerHTML += "<br>Sufijos de Cadena 1:";
	for(var i = cadena1.length; i >= 0; i--)
		res.innerHTML += "<br>S"+(cadena1.length - i)+": "+cadena1.substring(i,cadena1.length);

	res.innerHTML += "<br>Sufijos de Cadena 2:";
	for(var i = cadena2.length; i >= 0; i--)
		res.innerHTML += "<br>S"+(cadena2.length - i)+": "+cadena2.substring(i,cadena2.length);

	res.innerHTML += "<br>Subcadenas de la Cadena 1: "
	for(var i = 0; i <= cadena1.length; i++){
		for(var j = i+1; j <= cadena1.length; j++){
			res.innerHTML += "<br>"+cadena1.substring(i,j);
		}
		res.innerHTML += "<br>";
	}

	res.innerHTML += "<br>Subcadenas de la Cadena 2: "
	for(var i = 0; i <= cadena2.length; i++){
		for(var j = i+1; j <= cadena2.length; j++){
			res.innerHTML += "<br>"+cadena2.substring(i,j);
		}
		res.innerHTML += "<br>";
	}

	res.innerHTML += "(Cadena 1)+";
	for(var n = 0; n <= 10; n++)
		res.innerHTML += "<br>jue"
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
}