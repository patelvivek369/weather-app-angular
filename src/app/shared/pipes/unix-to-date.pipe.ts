import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'unixToDate'
})
export class UnixToDatePipe implements PipeTransform {
  transform(value: number): String {
    let date = new Date(value*1000)
    return `${ date.toLocaleString('en-US', { hour: 'numeric', hour12: true }) }`
  }
}
