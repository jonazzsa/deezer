import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeContainerComponent } from './home-container.component';



@NgModule({
  declarations: [
    HomeContainerComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HomeContainerComponent
  ]
})
export class HomeContainerModule { }
