import { AppComponent } from './../../../app.component';
import { MoviesService } from './../../../Services/movies.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie-genres',
  templateUrl: './movie-genres.component.html',
  styleUrls: ['./movie-genres.component.scss']
})
export class MovieGenresComponent implements OnInit {
  
  loading: boolean;
  collection: any;
  data_found_alert: boolean;

  constructor(
    private moviesService: MoviesService,
    private appComponent:AppComponent
    ) {
    this.data_found_alert = false;
    this.loading = true;
  }
  

  ngOnInit() {
    this.getCollection(1);
  }

  getCollection(page) {
    this.moviesService.getMovieGenres().subscribe(res => {
      console.log("dfghjjfghj:", res);
        if (res != null) {
          this.collection = res.genres;
          this.loading = false;
        } else {  
          this.loading = false;
          this.data_found_alert = true;
        }
      });
  }

    getCollectionBygenre(item,page) {
    // this.genre_id = item;
    // if (this.moviesService.current_list == 'moviesGenres') {
    //   this.moviesService.getMoviesByGenre_id(this.genre_id, page).subscribe(res => {
    //     if (res.results != null) {
    //       this.collection = res.results;
    //       this.updateCurrentPage();
    //     }
    //   });
    // } else if (this.moviesService.current_list == 'tvsGenres') {
      // this.moviesService.getTvShowsByGenre_id(item.id, page).subscribe(res => {
      //   if (res.results != null) {
      //     this.collection = res.results;
      //     this.updateCurrentPage();
      //   }
      // });
    }


  showDetails(item) {
    this.appComponent.flag = 4;
    console.log("aaaaaaa", item.id);
    this.moviesService.current_movie_id = item.id;
  }
}
