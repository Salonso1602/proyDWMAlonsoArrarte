import { DaysOfWeek } from "@enums/days-of-week";
import { newsTypes } from "@enums/newsTypes";
import { INews } from "@interfaces/news";

import { activities } from "./activities";
import { events } from "./events";
import { dishes } from "./dishes";

export const news: INews[] = [
  {
    subject: dishes[0],
    caption: 'El mejor revuelto de la ciudad',
    imageId: '0006',
    type : newsTypes.Food
  },
  {
    subject: activities[0],
    caption: '¡Toca para reservar tu lugar ya!',
    imageId: '0007',
    type : newsTypes.Activity
  },
  {
    subject: events[0],
    caption: '¡No te pierdas el show!',
    imageId: '0008',
    type : newsTypes.Event
  },
  {
    subject: activities[1],
    imageId: '0009',
    caption: '¡Toca para reservar tu lugar ya!',
    type : newsTypes.Activity
  }
];