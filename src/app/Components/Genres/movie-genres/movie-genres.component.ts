import { AppComponent } from './../../../app.component';
import { MoviesService } from './../../../Services/movies.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie-genres',
  templateUrl: './movie-genres.component.html',
  styleUrls: ['./movie-genres.component.scss']
})
export class MovieGenresComponent implements OnInit {
  collection: any;

  constructor(
    private moviesService: MoviesService,
    private appComponent:AppComponent
    ) { }
  

  ngOnInit() {
    this.getCollection(1);
  }

  getCollection(page) {
    this.moviesService.getMovieGenres().subscribe(res => {
        if (res != null) {
          this.collection = res.genres;
        }
      });
  }

  getMoviesByGenre(item){
    this.moviesService.currGenreId = item.id;
    this.moviesService.currGenreName = item.name;
    this.appComponent.flag = 'movieByGenre';
  }
}
