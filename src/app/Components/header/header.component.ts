import { AppComponent } from 'src/app/app.component';
import { Component, Input } from '@angular/core';
import { MoviesService } from 'src/app/Services/movies.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(
    private moviesService: MoviesService,
    private appComponent: AppComponent,
  ) { }
  
  //Home
  linkClick(link_name) {
    if (link_name == 'MMovies') {
      this.appComponent.flag = 3;
      this.moviesService.getAllMovies('1').subscribe(res => {
        res.results;
        this.appComponent.flag = 1;
      });

    } else {
      this.moviesService.current_list = link_name;
      this.appComponent.flag = 3;
      this.moviesService.getAllMovies('1').subscribe(res => {
        res.results;
        this.appComponent.flag = 2;
      });
    }
  }
}
