import { MoviesService } from 'src/app/Services/movies.service';
import { AppComponent } from './../../../app.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movies-by-genre',
  templateUrl: './movies-by-genre.component.html',
  styleUrls: ['./movies-by-genre.component.scss']
})
export class MoviesByGenreComponent implements OnInit {
collection: any;
  currentPage: any;
  next_prev: number;
  genreName: any;

  constructor(
    private moviesService: MoviesService,
    private appComponent:AppComponent
    ) {
    this.currentPage = 1;
    this.genreName = this.moviesService.currGenreName;
  }
  
  ngOnInit() {
    this.getCollection(1);
  }

  getCollection(page_No) {
      this.moviesService.getMoviesByGenre_id(page_No).subscribe(
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
