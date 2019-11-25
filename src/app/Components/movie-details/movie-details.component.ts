import { MoviesService } from 'src/app/Services/movies.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {

  constructor(private moviesService:MoviesService) { }
  collection: any;
  video: any;
  ngOnInit() {
    this.moviesService.getMovieVideo(this.moviesService.current_movie_id).subscribe(res => {
      console.log("video: ", res);
      // console.log("video results: ", res.results);
    });
    this.moviesService.getMovieById(this.moviesService.current_movie_id).subscribe(res => {
      this.collection = res;
      // console.log(this.collection);
    });
  }
}
