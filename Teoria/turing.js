$(() => {
    //Séptupla en un objeto
    var turing = {
        Q: ["Q0", "Q1", "Q2", "Q3", "Q4"],
        E: ["0", "1"],
        T: ["0", "1", "X", "Y", "B"],
        Q0: "Q0",
        B: "B",
        F: "Q4",
        S: [
            ["Q0", "0", "Q1", "X", "R"],
            ["Q0", "Y", "Q3", "Y", "R"],
            ["Q1", "0", "Q1", "0", "R"],
            ["Q1", "1", "Q2", "Y", "L"],
            ["Q1", "Y", "Q1", "Y", "R"],
            ["Q2", "0", "Q2", "0", "L"],
            ["Q2", "X", "Q0", "X", "R"],
            ["Q2", "Y", "Q2", "Y", "L"],
            ["Q3", "Y", "Q3", "Y", "R"],
            ["Q3", "B", "Q4", "B", "R"]
        ]
    };
    $("#ejecutar").click(() => {
        //Inicializar la cinta, el estado y la salida de resultados
        $("#salida").html("");
        var estAct = turing.Q0;
        var pos = 0;
        var result;
        var bloque = true;
        //La cadena se transforma en un arreglo de caracteres porque inmutabilidad
        var cadena = $("#cadena").val();
        cadena = cadena.split('');
        while (estAct !== turing.F && bloque === true) {
            //Suponemos que el if de abajo no se ejecutará (Salvo en el caso inicial)
            bloque = false;
            //Buscar entre todas las transiciones
            for (let i = 0; i < turing.S.length; i++) {
                //Protección contra undefined. cadena[pos] regresa undefined si no es ningun caracter. Se sustitute por el símbolo en blanco de la séptupla
                cadena[pos] = (cadena[pos] === undefined) ? turing.B : cadena[pos];
                if (turing.S[i][0] === estAct && turing.S[i][1] === cadena[pos]) {
                    //Se imprime antes de ejecutar la transición
                    result = "Símbolo leído: " + cadena[pos] + " Estado anterior: " + estAct;
                    $("#salida").html($("#salida").html() + "<br>" + result);

                    //Se cambia el estado y se escribe el símbolo en la cinta
                    estAct = turing.S[i][2];
                    cadena[pos] = turing.S[i][3];
                    //Se imprime la información antes de ir a la derecha o a la izquierda
                    result = "Símbolo escrito: " + cadena[pos] + " Estado siguiente: " + estAct;
                    $("#salida").html($("#salida").html() + "<br>" + result);

                    (turing.S[i][4] === "R" ? ++pos : --pos);
                    //Como se ejecutó una transición (este bloque de código), la variable se cambia a true y se rompe el ciclo que busca las transiciones 
                    bloque = true;
                    break;
                } else {
                    //Si no encuentra una transición que corresponda, busca la siguiente
                    continue;
                }
            }
        }
        //Si se ejecutó el bloque y llegó a un estado final, se acepta la cadena
        //Si nunca se ejecutó, automáticamente sale del while y se toma como cadena no aceptada
        if(bloque === true){
            $("#salida").html($("#salida").html() + "<br>Cadena aceptada");
        }else{
            $("#salida").html($("#salida").html() + "<br>Cadena NO aceptada");
        }
    });    
});