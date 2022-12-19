import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Proyecto } from 'src/app/model/proyecto';
import { ImageService } from 'src/app/service/image.service';
import { ProyectoService } from 'src/app/service/proyecto.service';
import { TokenService } from 'src/app/service/token.service';


@Component({
  selector: 'app-proyecto',
  templateUrl: './proyecto.component.html',
  styleUrls: ['./proyecto.component.css']
})
export class ProyectoComponent implements OnInit {
  proyecto: Proyecto[] = [];

  constructor(private proyectoService: ProyectoService, 
              private tokenService: TokenService,
              public imageService: ImageService,
              private activatedRouter: ActivatedRoute) { }

  isLogged = false;

  ngOnInit(): void {
    this.cargarProyecto();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarProyecto(): void{
    this.proyectoService.lista().subscribe(
      data => {
        this.proyecto = data;
      }
    )
  }

  delete(id?: string){
    if(id != undefined){
      const name = "proyecto_" + id;
      this.proyectoService.delete(id).subscribe(
        data => {
          this.cargarProyecto();
          this.imageService.deleteImage(name);
        }, err => {
          alert("No se pudo eliminar");
        }
      )
    }
  }

}
