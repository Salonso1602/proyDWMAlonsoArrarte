import { Pipe, PipeTransform } from '@angular/core';
import { DaysOfWeek, getDayName } from '@enums/days-of-week';

@Pipe({
  name: 'dayName'
})
export class DayNamePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return getDayName(value as DaysOfWeek);
  }

}
