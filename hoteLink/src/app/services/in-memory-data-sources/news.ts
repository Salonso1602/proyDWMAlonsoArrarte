import { DaysOfWeek } from "@enums/days-of-week";
import { newsTypes } from "@enums/newsTypes";
import { INews } from "@interfaces/news";

export const news: INews[] = [
  {
    subject: {
      id: 1,
      name: 'Revuelto gramajo',
      description: 'Exquisita preparación gauchescamente tradicional',
      price: 10,
      serviceTime: 15
    },
    caption: 'El mejor revuelto de la ciudad',
    imageId: '0006',
    type : newsTypes.Food
  },
  {
    subject: {
      id: 1,
      name: 'Clases de equitación: Nivel principiante',
      description: 'Excelente oportunidad para conocer el mundo del caballo',
      place: 'Calle 123',
      monthlyPrice: 100,
      timesOfActivity: [{
        day: DaysOfWeek.Monday,
        startTime: '10:00',
        endTime: '11:00'
      }]
    },
    caption: '¡Toca para reservar tu lugar ya!',
    imageId: '0007',
    type : newsTypes.Activity
  },
  {
    subject: {
      id: 1,
      name: 'Gira de Guns & Roses',
      place: 'Estadio Centenario',
      date: new Date(2022, 12, 16),
      entranceFee: 49.99
    },
    caption: '¡No te pierdas el show!',
    imageId: '0008',
    type : newsTypes.Event
  },
  {
    subject: {
      id: 2,
      name: 'Clases de equitación: Nivel intermedio',
      description: 'Adentrarse en este arte nunca estuvo tan al alcance de la mano.',
      place: 'Calle 456',
      monthlyPrice: 150,
      timesOfActivity: [{
        day: DaysOfWeek.Thursday,
        startTime: '17:00',
        endTime: '18:00'
      }]
    },
    imageId: '0009',
    caption: '¡Toca para reservar tu lugar ya!',
    type : newsTypes.Activity
  }
];