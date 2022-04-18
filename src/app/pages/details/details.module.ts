import { AlbumContainerModule } from './../../components/album-container/album-container.module';
import { BackModule } from './../../components/back/back.module';
import { MainModule } from './../../components/main/main.module';
import { TracklistModule } from './../../components/tracklist/tracklist.module';
import { DetailsTracksModule } from './../../components/details-tracks/details-tracks.module';
import { AlbumListModule } from './../../components/album-list/album-list.module';
import { AlbumModule } from './../../components/album/album.module';
import { TopTracksModule } from './../../components/top-tracks/top-tracks.module';
import { ArtistsCardDetailsModule } from './../../components/artists-card-details/artists-card-details.module';
import { MainContainerModule } from './../../components/main-container/main-container.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailsComponent } from './details.component';
import { HeaderModule } from 'src/app/components/header/header.module';



@NgModule({
  declarations: [
    DetailsComponent
  ],
  imports: [
    CommonModule,
    HeaderModule,
    MainContainerModule,
    ArtistsCardDetailsModule,
    TopTracksModule,
    AlbumModule,
    AlbumListModule,
    DetailsTracksModule,
TracklistModule,
MainModule,
BackModule,
AlbumContainerModule
  ]
})
export class DetailsModule { }
