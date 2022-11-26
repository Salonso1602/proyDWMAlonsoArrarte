import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class NeedsSelectedHotel implements CanActivate{

  constructor(private ar : Router) { }

  canActivate() : boolean {
      if(localStorage.getItem('hotel_id') !== null){
        return true
      } else{
        alert('Se debe seleccionar un hotel para acceder');
        this.ar.navigate(['']);
        return false
      }
  }
}
