import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TvAiringTvShowsComponent } from './tv-airing-tv-shows.component';

describe('TvAiringTvShowsComponent', () => {
  let component: TvAiringTvShowsComponent;
  let fixture: ComponentFixture<TvAiringTvShowsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TvAiringTvShowsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TvAiringTvShowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
