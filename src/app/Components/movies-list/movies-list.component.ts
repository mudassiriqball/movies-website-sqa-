import { AppComponent } from './../../app.component';
import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/Services/movies.service';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss']
})
export class MoviesListComponent implements OnInit {

  searchTerm = "";
  collection: any;
  currentPage: any;
  genre_show: boolean;
  next_prev: number;
  genre_id: any;
  data_found_alert: boolean;

  constructor(
    private moviesService: MoviesService,
    private appComponent:AppComponent) {
    this.genre_show = false;
    this.currentPage = 1;
    this.data_found_alert = false;
  }

  ngOnInit() {
    this.getCollection(1);
  }

  getCollection(page_No) {
    if (this.moviesService.current_list == 'allMovies') {
      this.moviesService.getAllMovies(page_No).subscribe(res => {
        if (res.results !=  null) {
          this.collection = res.results;
          this.updateCurrentPage();
        } else {
          this.data_found_alert = true;
        }
      });
    }
    // else if (this.moviesService.current_list == 'moviesGenres') {
    //   this.moviesService.getMoviesGenres().subscribe(res => {
    //     if (res.results != null) {
    //       this.collection = res.results;
    //       this.next_prev = 0;
    //       this.updateCurrentPage();
    //       this.genre_show = true;
    //     } else {
    //       this.data_found_alert = true;
    //     }
    //   });
    // }
    // else if (this.moviesService.current_list == 'tvsGenres') {
    //   this.moviesService.getTvShowGenres().subscribe(res => {
    //     if (res.results != null) {
    //       this.collection = res.results;
    //       this.next_prev = 0;
    //       this.updateCurrentPage();
    //       this.genre_show = true;
    //     } else {
    //       this.data_found_alert = true;
    //     }
    //   });
    // }
    else if (this.moviesService.current_list == 'latestMovies') {
      this.moviesService.getLatestMovies(page_No).subscribe(res => {
        if (res.results != null) {
          this.collection = res.results;
          this.updateCurrentPage();
        }
        else {
          this.data_found_alert = true;
        }
      });
    }
    else if (this.moviesService.current_list == 'nowPlayingMovies') {
      this.moviesService.getNowPlayingMovies(page_No).subscribe(res => {
        if (res.results != null) {
          this.collection = res.results;
          this.updateCurrentPage();
        }
        else {
          this.data_found_alert = true;
        }
      });
    }
    else if (this.moviesService.current_list == 'popularMovies') {
      this.moviesService.getPopularMovies(page_No).subscribe(res => {
        if (res.results != null) {
          this.collection = res.results;
          this.updateCurrentPage();
        }
        else {
          this.data_found_alert = true;
        }
      });
    }
    else if (this.moviesService.current_list == 'topRatedMovies') {
      this.moviesService.getTopRatedMovies(page_No).subscribe(res => {
        if (res.results != null) {
          this.collection = res.results;
          this.updateCurrentPage();
        }
        else {
          this.data_found_alert = true;
        }
      });
    }
    else if (this.moviesService.current_list == 'upcomingMovies') {
      this.moviesService.getUpcomingMovies(page_No).subscribe(res => {
        if (res.results != null) {
          this.collection = res.results;
          this.updateCurrentPage();
        }
        else {
          this.data_found_alert = true;
        }
      });
    }
    else if (this.moviesService.current_list == 'latestTVShows') {
      this.moviesService.getLatestTVShows(page_No).subscribe(res => {
        if (res.results != null) {
          this.collection = res.results;
          this.updateCurrentPage();
        }
        else {
          this.data_found_alert = true;
        }
      });
    }
    else if (this.moviesService.current_list == 'tvAiringToday') {
      this.moviesService.getTvAiringToday(page_No).subscribe(res => {
        if (res.results != null) {
          this.collection = res.results;
          this.updateCurrentPage();
        }
        else {
          this.data_found_alert = true;
        }
      });
    }
    else if (this.moviesService.current_list == 'tvOnTheAir') {
      this.moviesService.getTvOnTheAir(page_No).subscribe(res => {
        if (res.results != null) {
          this.collection = res.results;
          this.updateCurrentPage();
        }
        else {
          this.data_found_alert = true;
        }
      });
    }
    else if (this.moviesService.current_list == 'popularTVShows') {
      this.moviesService.getPopularTVShows(page_No).subscribe(res => {
        if (res.results != null) {
          this.collection = res.results;
          this.updateCurrentPage();
        }
        else {
          this.data_found_alert = true;
        }
      });
    }
    else if (this.moviesService.current_list == 'topRatedTVShows') {
      this.moviesService.getTopRatedTVShows(page_No).subscribe(res => {
        if (res.results != null) {
          this.collection = res.results;
          this.updateCurrentPage();
        }
        else {
          this.data_found_alert = true;
        }
      });
    }
    else if (this.moviesService.current_list == 'latestPeople') {
      this.moviesService.getLatestPeople(page_No).subscribe(res => {
        if (res.results != null) {
          this.collection = res.results;
          this.updateCurrentPage();
        }
        else {
          this.data_found_alert = true;
        }
      });
    }
    else if (this.moviesService.current_list == 'popularPeople') {
      this.moviesService.getPopularPeople(page_No).subscribe(res => {
        if (res.results != null) {
          this.collection = res.results;
          this.updateCurrentPage();
        }
        else {
          this.data_found_alert = true;
        }
      });
    }
    else if (this.moviesService.current_list == 'discoverMovies') {
      this.moviesService.getDiscoverMovies(page_No).subscribe(res => {
        if (res.results != null) {
          this.collection = res.results;
          this.updateCurrentPage();
        }
        else {
          this.data_found_alert = true;
        }
      });
    }
    else if (this.moviesService.current_list == 'discoverTVShows') {
      this.moviesService.getDiscoverTVShows(page_No).subscribe(res => {
        if (res.results != null) {
          this.collection = res.results;
          this.updateCurrentPage();
        }
        else {
          this.data_found_alert = true;
        }
      });
    }
    else if (this.moviesService.current_list == 'tranding') {
      this.moviesService.getTranding(page_No).subscribe(res => {
        if (res.results != null) {
          this.collection = res.results;
          this.updateCurrentPage();
        }
        else {
          this.data_found_alert = true;
        }
      });
    }
  }

  onFirstPageClick() {
    this.next_prev = 0;
    if (this.moviesService.current_list == 'moviesGenres' || this.moviesService.current_list == 'tvsGenres') {
      this.getCollectionBygenre(this.genre_id,1);
    } else {
      this.getCollection(1);
    }
  }

  nextPageClick = () => {
    this.next_prev = 1;
    if (this.moviesService.current_list == 'moviesGenres' || this.moviesService.current_list == 'tvsGenres') {
      this.getCollectionBygenre(this.genre_id, (this.currentPage+1));
    } else {
      this.getCollection(this.currentPage + 1);
    }
  }

  prevPageClick() {
    if (this.moviesService.current_list == 'moviesGenres' || this.moviesService.current_list == 'tvsGenres') {
      if (this.currentPage == 1) {
        this.getCollectionBygenre(this.genre_id,1);
      } else if (this.currentPage > 1) {
        this.next_prev = -1;
        this.getCollectionBygenre(this.genre_id,(this.currentPage-1));
      }
    } else {
      if (this.currentPage == 1) {
        this.getCollection(1);
      } else if (this.currentPage > 1) {
        this.next_prev = -1;
        this.getCollection(this.currentPage - 1);
      }
    }
  }
  setFilteredItems() { }


  getCollectionBygenre(item,page) {
    this.genre_id = item;
    if (this.moviesService.current_list == 'moviesGenres') {
      this.moviesService.getMoviesByGenre_id(this.genre_id, page).subscribe(res => {
        if (res.results != null) {
          this.collection = res.results;
          this.updateCurrentPage();
        }
      });
    } else if (this.moviesService.current_list == 'tvsGenres') {
      this.moviesService.getTvShowsByGenre_id(item.id, page).subscribe(res => {
        if (res.results != null) {
          this.collection = res.results;
          this.updateCurrentPage();
        }
      });
    }
  }

  updateCurrentPage() {
    this.genre_show = false;
    this.data_found_alert = false;
    if (this.next_prev == 1) {
      this.currentPage += 1;
    } else if (this.next_prev == -1) {
      this.currentPage -= 1;
    } else {
      this.currentPage = 1;
    }
  }

  showDetails(item) {
    this.appComponent.flag = 4;
    console.log("aaaaaaa", item.id);
    this.moviesService.current_movie_id = item.id;
  }
}
