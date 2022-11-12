import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IHotel } from '@interfaces/hotel';
import { ILocation } from '@interfaces/location';

@Component({
  selector: 'app-more-info-details',
  templateUrl: './more-info-details.component.html',
  styleUrls: ['./more-info-details.component.scss']
})
export class MoreInfoDetailsComponent implements OnInit {

  detailed? : IHotel | ILocation;
  detailedId? : string;
  headerText? : string;

  constructor(private route: Router) { }

  ngOnInit(): void {
    this.getInstance();

    this.detailed = {
      id : '0',
      name : 'Duncan Hill Hotel',
      location : {
        id : '0',
        name : 'Cochabamba',
        shortDescription : 'El más hermoso valle de Bolivia',
        longDescription : "Bla bla bla, info del hotel, bla bla bla, es muy lindo, bla bla bla, fundado en 1475, bla bla bla, premio 6 estrellas Instalaciones: cuenta con psicina, interna y externa, bla bla bla, tambien hay salida a la playa (100% real), bla bla, habitaciones suite con 2 lavabos, bla bla bla, restoran 3 estrellas michelin, buffet y desayuno, bla bla bla Información de contacto Información de contacto Información de contacto para reservas 480912481094 para servicio a habitacion 23141924234 para sugerencias 4309842309"
      },
      address : 'Blvar Artigas 2018',
      attentionHours : '10:00 - 18:00',
      contactInfo : '+598 99 223 454',
      shortDescription : 'El hotel cafetero número 1 de la región',
      longDescription : "Bla bla bla, info del hotel, bla bla bla, es muy lindo, bla bla bla, fundado en 1475, bla bla bla, premio 6 estrellas Instalaciones: cuenta con psicina, interna y externa, bla bla bla, tambien hay salida a la playa (100% real), bla bla, habitaciones suite con 2 lavabos, bla bla bla, restoran 3 estrellas michelin, buffet y desayuno, bla bla bla Información de contacto Información de contacto Información de contacto para reservas 480912481094 para servicio a habitacion 23141924234 para sugerencias 4309842309"
    }
  }

  getInstance() {
    const currentURL = this.route.url.split('/');
    this.detailedId = currentURL[currentURL.indexOf('details') - 1];

    switch(currentURL[currentURL.indexOf('details') - 2]){
      case 'location':
        //this.ls.getLocationById(this.detailedId).subscribe(res => this.detailed = res);
        this.headerText = 'Sobre Nuestra Casa';
        break;
      case 'hotel':
        //this.hs.getHotelById(this.detailedId).subscribe(res => this.detailed = res);
        this.headerText = 'Sobre Nosotros';
        break;
    }    
  }

}
