class Cosa{
    texto:string;
    numero: number;

    constructor(texto:string,numero:number){
        this.texto = texto;
        this.numero = numero;
    }

    mostrar():void{
        console.info("Texto: "+this.texto);
        console.log("Número: "+this.numero);
    }
}


var cosa =  new Cosa("Hola",6);
cosa.mostrar();