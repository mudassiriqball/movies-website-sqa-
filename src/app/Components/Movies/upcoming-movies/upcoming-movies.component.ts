import { MoviesService } from './../../../Services/movies.service';
import { AppComponent } from 'src/app/app.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-upcoming-movies',
  templateUrl: './upcoming-movies.component.html',
  styleUrls: ['./upcoming-movies.component.scss']
})
export class UpcomingMoviesComponent implements OnInit {
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
      this.moviesService.getUpcomingMovies(page_No).subscribe(
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
