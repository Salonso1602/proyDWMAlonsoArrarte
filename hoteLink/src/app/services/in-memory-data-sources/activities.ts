import { DaysOfWeek } from "@enums/days-of-week";
import { IActivity } from "@interfaces/activity";

import { createTime } from "@utils/date";

export const activities: IActivity[] = [
  {
    id: 1,
    name: 'Clases de equitación: Nivel principiante',
    description: 'Excelente oportunidad para conocer el mundo del caballo',
    place: 'Calle 123',
    weeklyPrice: 100,
    booking: {
      total: 10,
      remaining: 5
    },
    timesOfActivity: [{
      day: DaysOfWeek.Monday,
      startTime: createTime(10),
      endTime: createTime(11)
    }]
  },
  {
    id: 2,
    name: 'Clases de equitación: Nivel intermedio',
    description: 'Adentrarse en este arte nunca estuvo tan al alcance de la mano.',
    place: 'Calle 456',
    weeklyPrice: 150,
    booking: {
      total: 10,
      remaining: 2
    },
    timesOfActivity: [
      {
        day: DaysOfWeek.Thursday,
        startTime: createTime(17),
        endTime: createTime(18)
      },
      {
        day: DaysOfWeek.Saturday,
        startTime: createTime(10),
        endTime: createTime(11)
      }
    ]
  }
]