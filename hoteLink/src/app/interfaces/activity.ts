import { IBookable } from '@interfaces/bookable';
import { DaysOfWeek } from '@enums/days-of-week';

export interface IActivity extends IBookable {
  monthlyPrice: number;
  timesOfActivity: {
    day: DaysOfWeek,
    startTime: string,
    endTime: string
  }[];
}