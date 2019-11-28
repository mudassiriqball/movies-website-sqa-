import { AppComponent } from './../../app.component';
import { MoviesService } from 'src/app/Services/movies.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-home',
  templateUrl: './main-home.component.html',
  styleUrls: ['./main-home.component.scss']
})
export class MainHomeComponent implements OnInit {

  constructor(
    private moviesService: MoviesService,
    private appComponent: AppComponent
  ) {
  }


  img_collection: any;
  searchTerm: string = "";

  ngOnInit() {
    this.moviesService.getPopularMovies('1').subscribe(res => {
      this.img_collection = res.results;
      console.log("data:", this.img_collection)
    });
  }


  onSearchChange(){
    console.log("fuck you asshole", this.searchTerm);
  }
}
