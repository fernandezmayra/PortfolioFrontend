import { Component, OnInit } from '@angular/core';
import { Storage, getDownloadURL, ref } from '@angular/fire/storage';
import { ActivatedRoute, Router } from '@angular/router';
import { Proyecto } from 'src/app/model/proyecto';
import { ImageService } from 'src/app/service/image.service';
import { ProyectoService } from 'src/app/service/proyecto.service';

@Component({
  selector: 'app-newproyecto',
  templateUrl: './newproyecto.component.html',
  styleUrls: ['./newproyecto.component.css']
})
export class NewproyectoComponent implements OnInit {
  nombreProy: string = "";
  descProy: string = "";
  imgProy: string = "";
  id: string = "";
  url: string = "";
  name: string = "";
  
  constructor(private proyectoService: ProyectoService,
              private router: Router,
              private activatedRouter: ActivatedRoute,
              public imageService: ImageService,
              private storage: Storage) { }

  ngOnInit(): void {
  }

  async onCreate(){
    const imagesRef = ref(this.storage, 'imagen/' + this.name)
    this.url = await getDownloadURL(imagesRef);
    this.imgProy =  this.url;
    const proyecto = new Proyecto(this.id, this.nombreProy, this.descProy, this.imgProy);
    this.proyectoService.save(proyecto).subscribe(
      data => {
        alert("Proyecto añadido correctamente");
        this.router.navigate(['']);
      }, err => {
        alert("Falló");
        this.router.navigate(['']);
      }
    )
  }

  uploadImage($event:any){
    this.id = this.generarId();
    this.name = "proyecto_" + this.id;
    this.imageService.uploadImage($event, this.name);
  }

  generarId = () =>{
    return Math.random().toString(30).substring(2);
  }
}
