import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopularTvShowsComponent } from './popular-tv-shows.component';

describe('PopularTvShowsComponent', () => {
  let component: PopularTvShowsComponent;
  let fixture: ComponentFixture<PopularTvShowsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopularTvShowsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopularTvShowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
