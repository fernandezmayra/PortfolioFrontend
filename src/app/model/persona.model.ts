export class persona{
    id?: number;
    nombre: string;
    apellido: string;
    descripcion: string;
    img: string;
    titulo: string;
    email: string;
    imgBackground: string;
    github: string;
    facebook: string;
    instagram: string;

    constructor(nombre: string, apellido: string, descripcion: string, img: string, titulo: string, email: string, imgBackground: string, github: string, facebook: string, instagram: string){
        this.nombre = nombre;
        this.apellido = apellido;
        this.descripcion = descripcion;
        this.img = img;
        this.titulo = titulo;
        this.email = email;
        this.imgBackground = imgBackground;
        this.github = github;
        this.facebook = facebook;
        this.instagram = instagram;
    }
}