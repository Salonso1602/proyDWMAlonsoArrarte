import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'bookableType'
})
export class BookableTypePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    const convertedValue = value as 'activity' | 'event' | undefined;
    if (convertedValue == 'activity') {
      return 'Actividades';
    }
    if (convertedValue == 'event') {
      return 'Eventos';
    }
    return value;
  }

}
