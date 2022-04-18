import { ContinueReadingPipe } from './continue-reading.pipe';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    ContinueReadingPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ContinueReadingPipe
  ]
})
export class ContinueReadingModule { }
