import { AppComponent } from './../../../app.component';
import { MoviesService } from './../../../Services/movies.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-on-the-air-tv-shows',
  templateUrl: './on-the-air-tv-shows.component.html',
  styleUrls: ['./on-the-air-tv-shows.component.scss']
})
export class OnTheAirTvShowsComponent implements OnInit {

  searchTerm = "";
  loading: boolean;
  collection: any;
  currentPage: any;
  next_prev: number;
  data_found_alert: boolean;

  constructor(
    private moviesService: MoviesService,
    private appComponent:AppComponent
    ) {
    this.currentPage = 1;
    this.data_found_alert = false;
    this.loading = true;
  }
  

  ngOnInit() {
    this.getCollection(1);
  }

  getCollection(page_No) {
      this.moviesService.getTvOnTheAir(page_No).subscribe(res => {
        if (res.results !=  null) {
          this.collection = res.results;
          this.updateCurrentPage();
        } else {
          this.loading = false;
          this.data_found_alert = true;
        }
      });
  }

  onFirstPageClick() {
    this.next_prev = 0;
      this.getCollection(1);
  }

  nextPageClick = () => {
    this.next_prev = 1;
    this.loading = true;
      this.getCollection(this.currentPage + 1);
  }

  prevPageClick() {
    this.loading = true;
      if (this.currentPage == 1) {
        this.getCollection(1);
      } else if (this.currentPage > 1) {
        this.next_prev = -1;
        this.getCollection(this.currentPage - 1);
    }
  }
  setFilteredItems() { }


  updateCurrentPage() {
    this.data_found_alert = false;
    this.loading = false;
    if (this.next_prev == 1) {
      this.currentPage += 1;
    } else if (this.next_prev == -1) {
      this.currentPage -= 1;
    } else {
      this.currentPage = 1;
    }
  }

  showDetails(item) {
    // this.appComponent.flag = 4;
    // console.log("aaaaaaa", item.id);
    // this.moviesService.currMovieId = item.id;
  }

}
