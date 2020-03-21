import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'range'
})
export class RangePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    if(value >=1000 && value<100000){
      return Math.round(value/1000) + 'k';
    } 
      return Math.round(value/100000) + 'L';
    }
  

}
