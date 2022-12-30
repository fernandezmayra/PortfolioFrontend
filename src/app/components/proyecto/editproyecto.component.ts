import { Component, OnInit } from '@angular/core';
import { Storage, getDownloadURL, ref } from '@angular/fire/storage';
import { ActivatedRoute, Router } from '@angular/router';
import { Proyecto } from 'src/app/model/proyecto';
import { ImageService } from 'src/app/service/image.service';
import { ProyectoService } from 'src/app/service/proyecto.service';

@Component({
  selector: 'app-editproyecto',
  templateUrl: './editproyecto.component.html',
  styleUrls: ['./editproyecto.component.css']
})
export class EditproyectoComponent implements OnInit {
  proyecto: Proyecto = null;
  url: string = '';

  constructor(private proyectoService: ProyectoService,
     private activatedRouter: ActivatedRoute, 
     private router: Router,
     public imageService: ImageService,
     private storage: Storage) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.proyectoService.detail(id).subscribe(
      data => {
        this.proyecto = data;
      }, err => {
        alert("Error al modificar");
        this.router.navigate(['']);
      }
    )
    
  }

  async onUpdate(){
    const id = this.activatedRouter.snapshot.params['id'];
    const name = "proyecto_" + id;
    const imagesRef = ref(this.storage, 'imagen/' + name)
    this.url = await getDownloadURL(imagesRef);
    this.proyecto.imgProy =  this.url;
    this.proyectoService.update(id, this.proyecto).subscribe(
      data => {
        alert("Proyecto modificado");
        this.router.navigate(['']);
      }, err => {
          alert("Error al modificar el proyecto");
          this.router.navigate(['']);
      }
    )
   
  }
  
  uploadImage($event:any){
    const id = this.activatedRouter.snapshot.params['id'];
    const name = "proyecto_" + id;
    this.imageService.uploadImage($event, name);
  }

  
}



 
   
    
     
 
