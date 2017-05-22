var Cosa = (function () {
    function Cosa(texto, numero) {
        this.texto = texto;
        this.numero = numero;
    }
    Cosa.prototype.mostrar = function () {
        console.info("Texto: " + this.texto);
        console.log("Número: " + this.numero);
    };
    return Cosa;
}());
var cosa = new Cosa("Hola", 6);
cosa.mostrar();
