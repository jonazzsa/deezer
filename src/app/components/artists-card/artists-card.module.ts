import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArtistsCardComponent } from './artists-card.component';
import { TextDigitsModule } from 'src/app/pipes/text-digits/text-digits.module';



@NgModule({
  declarations: [
    ArtistsCardComponent
  ],
  imports: [
    CommonModule,
    TextDigitsModule
  ],
  exports: [
    ArtistsCardComponent 
  ]
})
export class ArtistsCardModule { }
