import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'secToMin'
})
export class SecToMinPipe implements PipeTransform {

  transform(value: any) {
    if (!value) {
      value = 0;
    }
    return Math.floor(value / 60);
  }

}
