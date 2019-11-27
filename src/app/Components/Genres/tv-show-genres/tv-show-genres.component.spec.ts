import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TvShowGenresComponent } from './tv-show-genres.component';

describe('TvShowGenresComponent', () => {
  let component: TvShowGenresComponent;
  let fixture: ComponentFixture<TvShowGenresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TvShowGenresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TvShowGenresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
