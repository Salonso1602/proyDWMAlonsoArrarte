import { IDish } from '@interfaces/dish';
import { IEvent } from './event';
import { IActivity } from './activity';
import { newsTypes } from '@enums/newsTypes';

export type INews = {
  subject: IDish | IEvent | IActivity;
  type : newsTypes;
  caption: string,
  imageId: string
};