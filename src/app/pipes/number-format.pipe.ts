import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numberFormat'
})
export class NumberFormatPipe implements PipeTransform {

  transform(value: any) {
    if (!value) {
      value = 0;
    }

    if (value > 999 && value < 1000000) {
      return (value / 1000).toFixed(1) + 'K';
    } else if (value > 1000000) {
      return (value / 1000000).toFixed(1) + 'M';
    } else if (value < 900) {
      return value;
    }
  }

}
