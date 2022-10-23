import { Injectable } from '@angular/core';
import { DaysOfWeek } from '@enums/days-of-week';
import { INews } from '@interfaces/news';
import { Observable, of } from 'rxjs';

const news: INews[] = [
  {
    id: 1,
    name: 'Revuelto gramajo',
    caption: 'El mejor revuelto de la ciudad',
    imageId: '0001',
    description: 'Exquisita preparación gauchescamente tradicional',
    price: 10,
    serviceTime: 15
  },
  {
    id: 2,
    name: 'Clases de equitación: Nivel principiante',
    caption: '¡Toca para reservar tu lugar ya!',
    imageId: '0001',
    description: 'Excelente oportunidad para conocer el mundo del caballo',
    place: 'Calle 123',
    monthlyPrice: 100,
    timesOfActivity: [{
      day: DaysOfWeek.Monday,
      startTime: '10:00',
      endTime: '11:00'
    }]
  },
  {
    id: 3,
    name: 'Clases de equitación: Nivel intermedio',
    caption: '¡Toca para reservar tu lugar ya!',
    imageId: '0001',
    description: 'Adentrarse en este arte nunca estuvo tan al alcance de la mano.',
    place: 'Calle 456',
    monthlyPrice: 150,
    timesOfActivity: [{
      day: DaysOfWeek.Thursday,
      startTime: '17:00',
      endTime: '18:00'
    }]
  }
];

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor() { }

  getNews(): Observable<INews[]> {
    return of(news.slice(0, 2));
  }
}
