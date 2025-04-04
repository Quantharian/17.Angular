import { ComponentFixture, TestBed } from '@angular/core/testing';

import FilmDetailComponent from './film.detail.component';
import { StateService } from './services/state.service';
import { of } from 'rxjs';
import { Film } from '../core/types/film';

const mockFilm: Film = {
  id: '1',
  title: 'Film Title',
  description: 'Film Description',
  releaseYear: 2023,
  duration: 120,
  director: 'Director Name',
  rating: 5,
  poster: 'poster.jpg',
};

const mockStateService: StateService = {
  getFilm: (id: string) => of([{ ...mockFilm, id }]),
} as StateService;

fdescribe('FilmDetailComponent', () => {
  let component: FilmDetailComponent;
  let fixture: ComponentFixture<FilmDetailComponent>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [FilmDetailComponent],
      providers: [{ provide: StateService, useValue: mockStateService }],
    }).compileComponents();

    fixture = TestBed.createComponent(FilmDetailComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
