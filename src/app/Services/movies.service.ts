import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  movieName: any;
  currGenreId: any;
  currGenreName: any;
  currMovieId: any;

  apiKey: string = 'b967380eb49988bdf23a3d5213aa7886';

  current_list: string;

  constructor(public http: Http) { }

  //Home
  getAllMovies(page: string) {
    return this.http.get('https://api.themoviedb.org/3/discover/movie?api_key=' + this.apiKey +
      '&certification_country=US&certification.lte=G&sort_by=popularity.desc&page=' + page).pipe(
        map(
          res =>  res.json()
        )
      );
  }
  getMovieById() {
    return this.http.get('https://api.themoviedb.org/3/movie/' + this.currMovieId + '?api_key=' + this.apiKey +
      '&language=en-US').pipe(
        map(
          res => res.json()
        )
      );
  }

  getMovieVideo(id) {
    return this.http.get('https://api.themoviedb.org/3/movie/' + id + '/videos?api_key=' + this.apiKey +
      '&language=en-US').pipe(
        map(
          res => res.json()
        )
      );
  }

  getMovieByName(page:string) {
    return this.http.get('https://api.themoviedb.org/3/search/movie?api_key=' + this.apiKey +
      '&language=en-US&query=' + this.movieName + '&page=' + page + '&include_adult=false').pipe(
        map(
          res => res.json()
        )
      );
  }

  // Genres
  getMovieGenres() {
    return this.http.get('https://api.themoviedb.org/3/genre/movie/list?api_key=' + this.apiKey +
      '&language=en-US').pipe(
        map(
          res => res.json()
        )
      );
  }
  getMoviesByGenre_id(page: string) {
    return this.http.get('https://api.themoviedb.org/3/discover/movie?api_key=' + this.apiKey +
      '&with_genres=' + this.currGenreId + '&page=' + page).pipe(
        map(
          res => res.json()
        )
      );
  }
  getTvShowGenres() {
    return this.http.get('https://api.themoviedb.org/3/genre/tv/list?api_key=' + this.apiKey +
      '&language=en-US').pipe(
        map(
          res => res.json()
        )
      );
  }
  getTvShowsByGenre_id(genre_id: string, page: string) {
    return this.http.get('https://api.themoviedb.org/3/discover/tv?api_key=' + this.apiKey +
      '&with_genres=' + genre_id + '&page=' + page).pipe(
        map(
          res => res.json()
        )
      );
  }

  // Movies
  // getLatestMovies(page: string) {
  //   return this.http.get('https://api.themoviedb.org/3/movie/latest?api_key=' + this.apiKey +
  //     '&language=en-US&page=' + page).pipe(
  //       map(
  //         res => res.json()
  //       )
  //     );
  // }
  getNowPlayingMovies(page: string) {
    return this.http.get('https://api.themoviedb.org/3/movie/now_playing?api_key=' + this.apiKey +
      '&language=en-US&page=' + page).pipe(
        map(
          res => res.json()
        )
      );
  }
  getPopularMovies(page: string) {
    return this.http.get('https://api.themoviedb.org/3/movie/popular?api_key=' + this.apiKey +
      '&language=en-US&page=' + page).pipe(
        map(
          res => res.json()
        )
      );
  }
  getTopRatedMovies(page: string) {
    return this.http.get('https://api.themoviedb.org/3/movie/top_rated?api_key=' + this.apiKey +
      '&language=en-US&page=' + page).pipe(
        map(
          res => res.json()
        )
      );
  }
  getUpcomingMovies(page: string) {
    return this.http.get('https://api.themoviedb.org/3/movie/upcoming?api_key=' + this.apiKey +
      '&language=en-US&page=' + page).pipe(
        map(
          res => res.json()
        )
      );
  }

  // TV Shows
  getLatestTVShows(page: string) {
    return this.http.get('https://api.themoviedb.org/3/tv/latest?api_key=' + this.apiKey +
      '&language=en-US').pipe(
        map(
          res => res.json()
        )
      );
  }
  getTvAiringToday(page: string) {
    return this.http.get('https://api.themoviedb.org/3/tv/airing_today?api_key=' + this.apiKey +
      '&language=en-US&page=' + page).pipe(
        map(
          res => res.json()
        )
      );
  }
  getTvOnTheAir(page: string) {
    return this.http.get('https://api.themoviedb.org/3/tv/on_the_air?api_key=' + this.apiKey +
      '&language=en-US&page=' + page).pipe(
        map(
          res => res.json()
        )
      );
  }
  getPopularTVShows(page: string) {
    return this.http.get('https://api.themoviedb.org/3/tv/popular?api_key=' + this.apiKey +
      '&language=en-US&page=' + page).pipe(
        map(
          res => res.json()
        )
      );
  }
  getTopRatedTVShows(page: string) {
    return this.http.get('https://api.themoviedb.org/3/tv/top_rated?api_key=' + this.apiKey +
      '&language=en-US&page=' + page).pipe(
        map(
          res => res.json()
        )
      );
  }


  getTvShowsByName(name: string, page: string) {
    return this.http.get('https://api.themoviedb.org/3/search/tv?api_key=' + this.apiKey + '&language=en-US&query=' + name + '&page=' + page).pipe(
      map(
        res => res.json()
      )
    );
  }

  // People
  getLatestPeople(page: string) {
    return this.http.get('https://api.themoviedb.org/3/person/latest?api_key=' + this.apiKey +
      '&language=en-US&page=' + page).pipe(
        map(
          res => res.json()
        )
      );
  }
  
  getPopularPeople(page: string) {
    return this.http.get('https://api.themoviedb.org/3/person/popular?api_key=' + this.apiKey +
      '&language=en-US&page=' + page).pipe(
        map(
          res => res.json()
        )
      );
  }

  getPeopleByName(name: string, page: string) {
    return this.http.get('https://api.themoviedb.org/3/search/person?api_key' + this.apiKey +
      '&language=en-US&query=' + name + '&page=' + page + '&include_adult=false').pipe(
        map(
          res => res.json()
        )
      );
  }


  //Discover
  getDiscoverMovies(page: string) {
    return this.http.get('https://api.themoviedb.org/3/discover/movie?api_key=' + this.apiKey +
      '&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=' + page).pipe(
        map(
          res => res.json()
        )
      );
  }

  getDiscoverTVShows(page: string) {
    return this.http.get('https://api.themoviedb.org/3/discover/tv?api_key=' + this.apiKey +
      '&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&include_null_first_air_dates=false&page=' + page).pipe(
        map(
          res => res.json()
        )
      );
  }

  // Tranding
  getTranding(media_querry: string) {
    return this.http.get('https://api.themoviedb.org/3/trending/' + media_querry + '/day?api_key=' + this.apiKey).pipe(
      map(
        res => res.json()
      )
    );
  }

  // Multi Search
  getMultiSearch(media_querry: string, page: string) {
    return this.http.get('https://api.themoviedb.org/3/search/multi?api_key=' + this.apiKey + '&language=en-US&query=' + media_querry + '&page=' + page + '&include_adult=false').pipe(
      map(
        res => res.json()
      )
    );
  }
}