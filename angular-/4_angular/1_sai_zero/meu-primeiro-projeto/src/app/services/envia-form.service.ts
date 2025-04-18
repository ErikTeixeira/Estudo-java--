import { Injectable } from '@angular/core';

  // decorator para funcionar o service funcionar em toda a aplicação
@Injectable({
  providedIn: 'root'
})
export class EnviaFormService {

  constructor() { }

  enviaBackend( info: any ) {
    console.log("Submited");
    console.log( info );
  }
}
