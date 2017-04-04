function mostrar() {
	var json = '{'+
	    '"Q":["q1","q2","q3","q4","q5","q6","q7","q8","q9"],'+
	    '"A":["x","y","z"],'+
	    '"I":"q0",'+
	    '"F":["q4","q6","q8","q9"],'+
	    '"T":{"q0":{"x":["q1"]},"q1":{"x":["q1"],"y":["q2"]},"q2":{"y":["q2"],"z":["q3"]},"q3":{"x":["q4"],"y":["q5"],"z":["q3"]},'+
	    '"q4":{"x":["q4"]},"q5":{"x":["q7"],"y":["q5"],"z":["q6"]},"q6":{"z":["q6"]},"q7":{"x":["q7"],"y":["q8"],"z":["q9"]},'+
	    '"q8":{"y":["q8"]},"q9":{"z":["q9"]}}}';
	var datos = JSON.parse(json);
	var lista = document.getElementById('cosa');
	for(var elemento in datos){
		var li = document.createElement("li");
		if(elemento === "T"){
			for(estado in datos[elemento]){
				for(var letra in datos[elemento][estado]){
					var li = document.createElement("li");
					li.appendChild(document.createTextNode(elemento+":"+estado+":"+letra+ "= "+datos[elemento][estado][letra]));
					lista.appendChild(li);
				}
			}
		}else{
			li.appendChild(document.createTextNode(elemento+":"+datos[elemento]));
			lista.appendChild(li);	
		}
	}
}
function probar() {
	var texto = document.getElementById("prueba").value;
	var expreg = /(xx*)(yy*)(zz*)(xx+|yy*)(zz+|xx*)(yy+|zz*)/;
	if(expreg.test(texto.toLowerCase()) === true)
		alert("El autómata SÍ acepta esta cadena");
	else
		alert("El autómata NO acepta esta cadena");
}