import { IBookable } from '@interfaces/bookable';
import { DaysOfWeek } from '@enums/days-of-week';

export interface IActivity extends IBookable {
  weeklyPrice: number;
  timesOfActivity: TimeOfActivity[];
}

export interface TimeOfActivity {
  dayOfWeek: DaysOfWeek,
  startTime: Date,
  endTime: Date
}