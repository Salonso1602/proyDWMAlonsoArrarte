import { Injectable } from '@angular/core';
import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService{

  createDb(){
    return {
      registeredUsers : [
        {
          email: "mesipelado@gmail.com", 
          password: "vamomesi"
        },
        {
          email: "prueba@gmail.com", 
          password: "test"
        },
      ],
      
    }
  }

  constructor() { }
}
