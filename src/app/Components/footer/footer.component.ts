import { AppComponent } from './../../app.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor(private appComponent: AppComponent) { }

  ngOnInit() {
  }

  linkClick(link_name) {
      this.appComponent.flag = link_name;
  }
}
