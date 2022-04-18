import { TextDigitsPipe } from './text-digits.pipe';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    TextDigitsPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TextDigitsPipe
  ]
})
export class TextDigitsModule { }
