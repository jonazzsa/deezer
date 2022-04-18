import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MinutesDurationPipe } from './minutes-duration.pipe';



@NgModule({
  declarations: [
    MinutesDurationPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MinutesDurationPipe
  ]
})
export class MinutesDurationModule { }
