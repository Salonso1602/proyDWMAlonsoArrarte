import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IUser } from '@interfaces/user';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  url = 'http://localhost:3000/auth/login';

  constructor(private http : HttpClient) { }

  private getUsers() : Observable<IUser[]>{
    return of(registeredUsers)
  }

  authUser(email : string, password : string){
        //return this.http.post(this.url, {email: email, password:password});
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