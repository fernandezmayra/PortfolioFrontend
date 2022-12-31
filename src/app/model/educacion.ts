export class Educacion {
    id?: number;
    nombreE: string;
    descripcionE: string;
    inicio: string;
    fin: string;

    constructor(nombreE: string, descripcionE: string, inicio: string, fin: string){
        this.nombreE = nombreE;
        this.descripcionE = descripcionE;
        this.inicio = inicio;
        this.fin = fin;
    }
}
