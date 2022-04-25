import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phone'
})
export class PhonePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    const inputVal = value.toString();
    const slice1 = inputVal.slice(0, 3);
    const slice2 = inputVal.slice(3, 6);
    const slice3 = inputVal.slice(6)
    return `+1(${slice1})-${slice2}-${slice3}`;
  }

}
