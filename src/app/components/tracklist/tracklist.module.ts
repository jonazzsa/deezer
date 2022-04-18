import { ContinueReadingModule } from './../../pipes/continue-reading/continue-reading.module';
import { MinutesDurationModule } from './../../pipes/minutes-duration/minutes-duration.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TracklistComponent } from './tracklist.component';



@NgModule({
  declarations: [
    TracklistComponent
  ],
  imports: [
    CommonModule,
    MinutesDurationModule,
    ContinueReadingModule
  ],
  exports: [
    TracklistComponent
  ]
})
export class TracklistModule { }
