import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IUser } from '@interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  private getUsers() : Observable<IUser[]>{
    return of(registeredUsers)
  }

  authUser(email : string, password : string){
    let allUsers : IUser[] = [];
    this.getUsers().subscribe(users =>allUsers = users);
    for(let index = 0; index < allUsers.length; index++) {
      const user = allUsers[index];
      if(user.email === email){
        if(user.password === password){
          return true;
        }
        return false;
      }
    };
    return false;
    }
  }

const registeredUsers : IUser[] = [
  {
    email: "mesipelado@gmail.com", 
    password: "vamomesi"
  },
  {
    email: "prueba@gmail.com", 
    password: "test"
  },
];