import { AppComponent } from './../../app.component';
import { MoviesService } from 'src/app/Services/movies.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-home',
  templateUrl: './main-home.component.html',
  styleUrls: ['./main-home.component.scss']
})
export class MainHomeComponent implements OnInit {

  constructor(
    private moviesService: MoviesService,
    private appComponent: AppComponent
  ) {
    this.flag = null;
  }
  img_collection: any;
  movie_collection: any;
  tvShow_collection: any;
  people_collection: any;
  flag: string;
  searchTerm: string = "";

  ngOnInit() {
    this.moviesService.getPopularMovies('1').subscribe(res => {
      this.img_collection = res.results;
      console.log("data:", this.img_collection)
    });
  }

  mmoviesClick() {
    this.appComponent.flag = 1;
  }

  onSearchAll() {
    // this.moviesService.getMultiSearch(this.searchTerm, '1').subscribe(res => {
    //   this.collection = res.results;
    // });
  }
  onSearchMovies() {
    this.moviesService.getMovieByName(this.searchTerm, '1').subscribe(res => {
      this.movie_collection = res.results;   
      console.log("Darya Khan");
      this.flag = 'show_movies';
    });
   }
  onSearchTvs() { 
    this.moviesService.getTvShowsByName(this.searchTerm, '1').subscribe(res => {
      this.tvShow_collection = res.results;
      this.flag = 'show_tvShows';
    });
  }
  onSearchPeople() { 
    this.moviesService.getPeopleByName(this.searchTerm, '1').subscribe(res => {
      this.people_collection = res.results;
      this.flag = 'show_people';
    });
  }


  showDetails(item) {
    this.appComponent.flag = 4;
    this.moviesService.current_movie_id = item.id;
  }

}
