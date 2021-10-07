import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'w10pipe'
})
export class W10pipePipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): number {
    return 2021-value;
  }

}
