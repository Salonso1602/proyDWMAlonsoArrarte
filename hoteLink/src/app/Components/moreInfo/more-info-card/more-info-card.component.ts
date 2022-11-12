import { Component, OnInit, Input } from '@angular/core';
import { IHotel } from '@interfaces/hotel';

@Component({
  selector: 'app-more-info-card',
  templateUrl: './more-info-card.component.html',
  styleUrls: ['./more-info-card.component.scss']
})
export class MoreInfoCardComponent implements OnInit {

  @Input() hotel? : IHotel;

  constructor() { }

  ngOnInit(): void {
    this.hotel = {
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
      longDescription : 'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA'
    }
  }

}
