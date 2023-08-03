import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieDetalisComponentComponent } from './movie-detalis-component.component';

describe('MovieDetalisComponentComponent', () => {
  let component: MovieDetalisComponentComponent;
  let fixture: ComponentFixture<MovieDetalisComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieDetalisComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MovieDetalisComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
