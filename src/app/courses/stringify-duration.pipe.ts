import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stringifyDuration'
})
export class StringifyDurationPipe implements PipeTransform {

  transform(initialDuration: number): any {
    if (Math.floor(initialDuration / 60) > 0) {
      return `${Math.floor(initialDuration / 60)} h ${initialDuration % 60} min`
    } else {
      return ` ${initialDuration % 60} min`
    }
  }

}
