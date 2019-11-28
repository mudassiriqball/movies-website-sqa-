import { MoviesService } from 'src/app/Services/movies.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {
  
  collection: any;
  // production_companies: any;
  // production_countries: any;
  // genres: any;

  // backdrop_path: any;
  // budget: any;
  // homepage: any;
  // overview: any;
  // popularity: any;
  // poster_path: any;
  // release_date: any;

  // revenue: any;
  // runtime: any;
  // spoken_languages: any;
  // status: any;
  // release_date: any;
  // vote_average: any;
  // vote_count: any;
  
  constructor(private moviesService:MoviesService) { }
  ngOnInit() {
    this.moviesService.getMovieById().subscribe(res => {
      if(res != null){

        this.collection = res;
        console.log("ghjk:", res);
        // this.production_companies = res.production_companies;
        // this.production_countries = res.production_countries;
        // this.spoken_languages = res.spoken_languages;
        // this.genres= res.genres;
      
        // this.budget = res.budget;
        // this.homepage = res.homepage;
        // this.original_language = res.original_language;
        // this.overview = res.overview;
        // this.popularity = res.popularity;
        // this.poster_path = res.poster_path;
        // this.release_date = res.release_date;
        // this.revenue = res.revenue;
        // this.runtime = res.runtime;
        // this.status = res.status;
        // this.vote_average = res.vote_average;
        // this.vote_count = res.vote_count;
      }
    });
  }
}