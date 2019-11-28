import { AppComponent } from './../../app.component';
import { MoviesService } from './../../Services/movies.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  searchTerm = "";
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
      this.moviesService.getAllMovies(page_No).subscribe(
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
  setFilteredItems(page_No) {
    this.currentPage = 1;
    this.moviesService.movieName = this.searchTerm;
    this.moviesService.getMovieByName(page_No).subscribe(res => {
      if(res.results != null){
       this.collection = res.results; 
      }
    });
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
    console.log("id:",item.id)
    this.moviesService.currMovieId = item.id;
    this.appComponent.flag = 'movieDetails';
  }
}

  // getCollectionBygenre(item,page) {
  //   this.genre_id = item;
  //   if (this.moviesService.current_list == 'moviesGenres') {
  //     this.moviesService.getMoviesByGenre_id(this.genre_id, page).subscribe(res => {
  //       if (res.results != null) {
  //         this.collection = res.results;
  //         this.updateCurrentPage();
  //       }
  //     });
  //   } else if (this.moviesService.current_list == 'tvsGenres') {
  //     this.moviesService.getTvShowsByGenre_id(item.id, page).subscribe(res => {
  //       if (res.results != null) {
  //         this.collection = res.results;
  //         this.updateCurrentPage();
  //       }
  //     });
  //   }