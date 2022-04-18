import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopTracksComponent } from './top-tracks.component';



@NgModule({
  declarations: [
    TopTracksComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TopTracksComponent
  ]
})
export class TopTracksModule { }
