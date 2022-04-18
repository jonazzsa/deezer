import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'minutesduration'
})
export class MinutesDurationPipe implements PipeTransform {
  min: number = 0;
  sec: number = 0;
  transform(value: number): string {    
    this.min = Math.floor(value / 60);
    this.sec = value - this.min * 60; 
    return this.min.toString() + ':' + this.sec.toString();
  }

}
