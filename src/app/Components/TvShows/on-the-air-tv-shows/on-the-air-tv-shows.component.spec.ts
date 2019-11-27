import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnTheAirTvShowsComponent } from './on-the-air-tv-shows.component';

describe('OnTheAirTvShowsComponent', () => {
  let component: OnTheAirTvShowsComponent;
  let fixture: ComponentFixture<OnTheAirTvShowsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnTheAirTvShowsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnTheAirTvShowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
