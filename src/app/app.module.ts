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
import { LoadingListComponent } from './Components/loading-list/loading-list.component';
import { MovieDetailsComponent } from './Components/movie-details/movie-details.component';

// Movies Component
import { NowPlayingMoviesComponent } from './Components/Movies/now-playing-movies/now-playing-movies.component';
import { PopularMoviesComponent } from './Components/Movies/popular-movies/popular-movies.component';
import { TopRatedMoviesComponent } from './Components/Movies/top-rated-movies/top-rated-movies.component';
import { UpcomingMoviesComponent } from './Components/Movies/upcoming-movies/upcoming-movies.component';
import { PopularTvShowsComponent } from './Components/TvShows/popular-tv-shows/popular-tv-shows.component';
import { TopRatedTvShowsComponent } from './Components/TvShows/top-rated-tv-shows/top-rated-tv-shows.component';
import { TvAiringTvShowsComponent } from './Components/TvShows/tv-airing-tv-shows/tv-airing-tv-shows.component';
import { OnTheAirTvShowsComponent } from './Components/TvShows/on-the-air-tv-shows/on-the-air-tv-shows.component';
import { MovieGenresComponent } from './Components/Genres/movie-genres/movie-genres.component';
import { TvShowGenresComponent } from './Components/Genres/tv-show-genres/tv-show-genres.component';
import { HomeComponent } from './Components/home/home.component';
import { SearchComponent } from './Components/main-home/search/search.component';
import { MoviesByGenreComponent } from './Components/Genres/movies-by-genre/movies-by-genre.component';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    MainHomeComponent,
    HeaderComponent,
    LoadingListComponent,
    MovieDetailsComponent,
    NowPlayingMoviesComponent,
    PopularMoviesComponent,
    TopRatedMoviesComponent,
    UpcomingMoviesComponent,
    PopularTvShowsComponent,
    TopRatedTvShowsComponent,
    TvAiringTvShowsComponent,
    OnTheAirTvShowsComponent,
    MovieGenresComponent,
    TvShowGenresComponent,
    HomeComponent,
    SearchComponent,
    MoviesByGenreComponent,
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
