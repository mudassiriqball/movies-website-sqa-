import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopRatedTvShowsComponent } from './top-rated-tv-shows.component';

describe('TopRatedTvShowsComponent', () => {
  let component: TopRatedTvShowsComponent;
  let fixture: ComponentFixture<TopRatedTvShowsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopRatedTvShowsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopRatedTvShowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
