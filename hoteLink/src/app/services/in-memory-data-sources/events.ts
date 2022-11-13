import { IEvent } from "@interfaces/event";

export const events: IEvent[] = [
  {
    id: 1,
    name: 'Gira de Guns & Roses',
    description: 'La banda de rock más famosa del mundo vuelve al Uruguay',
    place: 'Estadio Centenario',
    booking: {
      total: 1000,
      remaining: 500
    },
    date: new Date(2022, 12, 16),
    entranceFee: 49.99
  }
]