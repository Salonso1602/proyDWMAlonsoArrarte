import { DaysOfWeek } from "@enums/days-of-week";
import { IActivity } from "@interfaces/activity";

export const activities: IActivity[] = [
  {
    id: 1,
    name: 'Clases de equitación: Nivel principiante',
    description: 'Excelente oportunidad para conocer el mundo del caballo',
    place: 'Calle 123',
    monthlyPrice: 100,
    booking: {
      total: 10,
      remaining: 5
    },
    timesOfActivity: [{
      day: DaysOfWeek.Monday,
      startTime: '10:00',
      endTime: '11:00'
    }]
  },
  {
    id: 2,
    name: 'Clases de equitación: Nivel intermedio',
    description: 'Adentrarse en este arte nunca estuvo tan al alcance de la mano.',
    place: 'Calle 456',
    monthlyPrice: 150,
    booking: {
      total: 10,
      remaining: 2
    },
    timesOfActivity: [{
      day: DaysOfWeek.Thursday,
      startTime: '17:00',
      endTime: '18:00'
    }]
  }
]