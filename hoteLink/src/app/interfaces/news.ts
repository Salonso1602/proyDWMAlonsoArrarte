import { IDish } from '@interfaces/dish';
import { IEvent } from './event';
import { IActivity } from './activity';

export type INews = {
  subject: IDish | IEvent | IActivity;
  caption: string,
  imageId: string
};