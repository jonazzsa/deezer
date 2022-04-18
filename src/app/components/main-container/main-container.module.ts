import { SidebarModule } from './../sidebar/sidebar.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainContainerComponent } from './main-container.component';



@NgModule({
  declarations: [
    MainContainerComponent
  ],
  imports: [
    CommonModule,
    SidebarModule
  ],
  exports: [MainContainerComponent]
})
export class MainContainerModule { }
