export class persona{
    id?: number;
    nombre: string;
    apellido: string;
    descripcion: string;
    img: string;
    ocupacion: string;

    constructor(nombre: string, apellido: string, descripcion: string, img: string, ocupacion: string){
        this.nombre = nombre;
        this.apellido = apellido;
        this.descripcion = descripcion;
        this.img = img;
        this.ocupacion = ocupacion;
    }
}