export class Proyecto{
    id?: number;
    nombreProy: string;
    descProy: string;
    imgProy: string;

    constructor(nombreProy: string, descProy: string, imgProy: string){
        this.nombreProy = nombreProy;
        this.descProy = descProy;
        this.imgProy = imgProy;
    }
}

