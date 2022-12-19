import { Injectable } from '@angular/core';
import { Storage, ref, uploadBytes, list, getDownloadURL, deleteObject } from '@angular/fire/storage';
import { finalize } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor(public storage: Storage) { 
    
  }
  
  public uploadImage($event: any, name: string){
    const file = $event.target.files[0]
    const imgRef = ref(this.storage, `imagen/` + name);
    uploadBytes(imgRef, file)
    .then(response => {console.log(response)})
    .catch(error => console.log(error))
  }

  public deleteImage(name: string){
    const imagesRef = ref(this.storage, 'imagen/' + name);
    deleteObject(imagesRef);
  }

}
