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
      this.appComponent.flag = link_name;
  }
}
