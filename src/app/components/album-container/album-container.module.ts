import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlbumContainerComponent } from './album-container.component';



@NgModule({
  declarations: [
    AlbumContainerComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AlbumContainerComponent
  ]
})
export class AlbumContainerModule { }
