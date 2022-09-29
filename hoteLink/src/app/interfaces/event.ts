import { IBookable } from '@interfaces/bookable';

export interface IEvent extends IBookable {
  date: Date;
  entranceFee: number;
}