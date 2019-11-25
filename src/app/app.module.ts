import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from './Components/footer/footer.component';
import { MainHomeComponent } from './Components/main-home/main-home.component';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './Components/header/header.component';
import { MoviesListComponent } from './Components/movies-list/movies-list.component';
import { LoadingListComponent } from './Components/loading-list/loading-list.component';
import { MovieDetailsComponent } from './Components/movie-details/movie-details.component';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    MainHomeComponent,
    HeaderComponent,
    MoviesListComponent,
    LoadingListComponent,
    MovieDetailsComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    HttpClientModule,
    HttpModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
