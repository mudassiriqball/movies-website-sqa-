import { AppComponent } from './../../../app.component';
import { MoviesService } from './../../../Services/movies.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-rated-movies',
  templateUrl: './top-rated-movies.component.html',
  styleUrls: ['./top-rated-movies.component.scss']
})
export class TopRatedMoviesComponent implements OnInit {
collection: any;
  currentPage: any;
  next_prev: number;

  constructor(
    private moviesService: MoviesService,
    private appComponent:AppComponent
    ) {
    this.currentPage = 1;
  }
  
  ngOnInit() {
    this.getCollection(1);
  }

  getCollection(page_No) {
      this.moviesService.getTopRatedMovies(page_No).subscribe(
        res => {
        if (res.results !=  null) {
          this.collection = res.results;
          this.updateCurrentPage();
        }
      });
  }

  onFirstPageClick() {
    this.next_prev = 0;
      this.getCollection(1);
  }

  nextPageClick = () => {
    this.next_prev = 1;
      this.getCollection(this.currentPage + 1);
  }

  prevPageClick() {
    // this.loading = true;
      if (this.currentPage == 1) {
        this.getCollection(1);
      } else if (this.currentPage > 1) {
        this.next_prev = -1;
        this.getCollection(this.currentPage - 1);
    }
  }
  
  updateCurrentPage() {
    if (this.next_prev == 1) {
      this.currentPage += 1;
    } else if (this.next_prev == -1) {
      this.currentPage -= 1;
    } else {
      this.currentPage = 1;
    }
  }

  showDetails(item) {
    this.moviesService.currMovieId = item.id;
    this.appComponent.flag = 'movieDetails';
  }
}
