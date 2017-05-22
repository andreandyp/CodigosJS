class Fecha{
    private dia: number = 0;
    private mes: number = 1;
    private año: number;
    private bis: boolean;
    private mes31 = [1,3,5,7,8,10,12];
    private mes30 = [4,6,9,11];

    constructor(año = 2017){
        this.año = año;
        this.bis = (año%4 == 0 || año%100 == 0 || año%400 == 0?true:false);
    }
    aumentar():void{
        ++this.dia;
        if(this.mes31.indexOf(this.mes) != -1){
            if(this.dia > 31){
                this.dia = 1;
                ++this.mes;
            }
        }else if(this.mes30.indexOf(this.mes) != -1){
            if(this.dia > 30){
                this.dia = 1;
                ++this.mes;
                }
        }else{
            if(this.bis == true){
                if(this.dia > 29){
                    this.dia = 1;
                    ++this.mes;
                }
            }else if(this.dia > 28){
                this.dia = 1;
                ++this.mes;
            }
        }
        if(this.mes > 12){
            ++this.año;
            this.mes = 1;
            this.dia = 1;
        }
    }
    mostrarFecha():string{
        return this.dia+"/"+this.mes+"/"+this.año;
    }
    sumarValores():string{
        return (this.dia+this.mes+this.año).toString();
    }
}

var fecha = new Fecha(2008);

for(let x = 1; x <= 370; x++){
    fecha.aumentar();
    console.log(fecha.mostrarFecha()+" - "+fecha.sumarValores());
}