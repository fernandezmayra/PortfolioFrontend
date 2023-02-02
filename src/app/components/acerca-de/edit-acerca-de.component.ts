import { Component, OnInit } from '@angular/core';
import { Storage, getDownloadURL, ref } from '@angular/fire/storage';
import { ActivatedRoute, Router } from '@angular/router';
import { persona } from 'src/app/model/persona.model';
import { ImageService } from 'src/app/service/image.service';
import { PersonaService } from 'src/app/service/persona.service';

@Component({
  selector: 'app-edit-acerca-de',
  templateUrl: './edit-acerca-de.component.html',
  styleUrls: ['./edit-acerca-de.component.css']
})
export class EditAcercaDeComponent implements OnInit {
  persona: persona = new persona("","","","","","","","","","");
  url: string = '';

  constructor(private activatedRouter: ActivatedRoute,
    private personaService: PersonaService,
    private router: Router,
    public imageService: ImageService,
    private storage: Storage) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.personaService.detail(id).subscribe(
      data => {
        this.persona = data;
      }, err => {
        alert("Error al modificar");
        this.router.navigate(['']);
      }
    )
  }

  async onUpdate(){
    const id = this.activatedRouter.snapshot.params['id'];
    const name = "perfil_" + id + "_img";
    const imgRef = ref(this.storage, 'imagen/' + name)
    this.url = await getDownloadURL(imgRef);
    this.persona.img =  this.url;
    const nombre = "perfil_" + id + "_imgBackground";
    const imagesRef = ref(this.storage, 'imagen/' + nombre)
    this.url = await getDownloadURL(imagesRef);
    this.persona.imgBackground =  this.url;
    this.personaService.update(id, this.persona).subscribe(
      data => {
        alert("Persona modificada");
        this.router.navigate(['']);
      }, err => {
        alert("Error al modificar la persona");
        this.router.navigate(['']);
      }
    )
  }    
  

  uploadImage($event:any, nombre:string){
    const id = this.activatedRouter.snapshot.params['id'];
    const name = "perfil_" + id + "_" + nombre;
    this.imageService.uploadImage($event, name);
  }

}
