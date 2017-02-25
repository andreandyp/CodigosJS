function analizar() {
	var cadena1 = document.getElementById('cadena1').value.toLowerCase();
	var cadena2 = document.getElementById('cadena2').value.toLowerCase();
	var nclausuras = document.getElementById('claus').value;
	if(!nclausuras || nclausuras > 100){
		nclausuras = 10;
	}
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
	res.innerHTML += subcadenas(cadena1);
	res.innerHTML += "Subcadenas de la Cadena 2: "
	res.innerHTML += subcadenas(cadena2);

	res.innerHTML += "(Cadena 1)+<br>";
	res.innerHTML += clausuras(cadena1,0,nclausuras);
	res.innerHTML += "(Cadena 1)*<br>";
	res.innerHTML += clausuras(cadena1,-1,nclausuras);
	res.innerHTML += "(Cadena 1)?<br>";
	res.innerHTML += clausuras(cadena1,-1,0);
	
	res.innerHTML += "(Cadena 2)+<br>";
	res.innerHTML += clausuras(cadena2,0,nclausuras);
	res.innerHTML += "(Cadena 2)*<br>";
	res.innerHTML += clausuras(cadena2,-1,nclausuras);
	res.innerHTML += "(Cadena 2)?<br>";
	res.innerHTML += clausuras(cadena2,-1,0);
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
function subcadenas(cad) {
	var sub = "";
	for(var i = 0; i <= cad.length; i++){
		for(var j = i+1; j <= cad.length; j++){
			sub += "<br>"+cad.substring(i,j);
		}
	}
	return sub;
}
function clausuras(cad,inicio,fin) {
	var cadenas = "";
	for (var i = inicio; i <= fin; i++) {
		for (var j = 0; j <= i; j++) {
			cadenas += cad;
		}
		cadenas += "<br>";
	}
	return cadenas;
}