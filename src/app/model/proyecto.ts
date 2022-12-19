export class Proyecto{
    id?: string;
    nombreProy: string;
    descProy: string;
    imgProy: string;

    constructor(id: string, nombreProy: string, descProy: string, imgProy: string){
        this.id = id;
        this.nombreProy = nombreProy;
        this.descProy = descProy;
        this.imgProy = imgProy;
    }
}

