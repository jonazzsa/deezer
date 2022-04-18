import { NoResultsModule } from './../../components/no-results/no-results.module';
import { HomeHeadingModule } from './../../components/home-heading/home-heading.module';
import { HomeContainerModule } from './../../components/home-container/home-container.module';
import { HomeCardsModule } from './../../components/home-cards/home-cards.module';
import { MainContainerModule } from './../../components/main-container/main-container.module';
import { SearchModule } from './../../components/search/search.module';
import { HeaderModule } from '../../components/header/header.module';
import { ArtistsCardModule } from './../../components/artists-card/artists-card.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';



@NgModule({
  declarations: [
    HomeComponent 
  ],
  imports: [
    CommonModule,
    ArtistsCardModule,
    HeaderModule,
    SearchModule,
    MainContainerModule,
    HomeCardsModule,
    HomeContainerModule,
    HomeHeadingModule,
    NoResultsModule
  ]
})
export class HomeModule { }