import { MainContainerModule } from './components/main-container/main-container.module';
import { DetailsModule } from './pages/details/details.module';
import { HomeModule } from './pages/home/home.module'; 
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HomeModule,
    DetailsModule,
    MainContainerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
