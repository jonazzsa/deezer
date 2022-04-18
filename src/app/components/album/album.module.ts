import { ContinueReadingModule } from './../../pipes/continue-reading/continue-reading.module';
import { TextDigitsModule } from './../../pipes/text-digits/text-digits.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlbumComponent } from './album.component';



@NgModule({
  declarations: [
    AlbumComponent
  ],
  imports: [
    CommonModule,
    TextDigitsModule,
    ContinueReadingModule
  ],
  exports: [
    AlbumComponent
  ]
})
export class AlbumModule { }
