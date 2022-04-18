import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArtistsCardDetailsComponent } from './artists-card-details.component';
import { TextDigitsModule } from 'src/app/pipes/text-digits/text-digits.module';



@NgModule({
  declarations: [
    ArtistsCardDetailsComponent
  ],
  imports: [
    CommonModule,
    TextDigitsModule
  ],
  exports: [
    ArtistsCardDetailsComponent
  ]
})
export class ArtistsCardDetailsModule { }
