import { TestBed } from '@angular/core/testing';

import { RepoService } from './repo.service';
import { provideHttpClient } from '@angular/common/http';
import {
  HttpTestingController,
  provideHttpClientTesting,
} from '@angular/common/http/testing';
import { Film } from '../../core/types/film';

const urlBase = 'http://localhost:3000';
const urlAPI = 'api/films';
const url = urlBase + urlAPI;

describe('RepoService', () => {
  let service: RepoService;
  let controller: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [],
      providers: [provideHttpClient(), provideHttpClientTesting()],
    });
    service = TestBed.inject(RepoService);
    controller = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    controller.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should load films', () => {
    service.loadFilms().subscribe((films) => {
      console.log(films);
      expect(films.length).toEqual(1);
      expect(films).toEqual([{} as Film]);
    });
    const routeTest = controller.expectOne(url);
    expect(routeTest.request.method).toEqual('GET');
    routeTest.flush({ results: [{}], error: '' });
  });

  it('should create a film', () => {
    const film = {} as Film;
    service.createFilm(film).subscribe((film) => {
      expect(film).toEqual({} as Film);
    });
    const routeTest = controller.expectOne(url);
    expect(routeTest.request.method).toEqual('POST');
    routeTest.flush({ results: [film], error: '' });
  });

  it('should update a film', () => {
    const mockFilm = {} as Film;
    service.updateFilm(mockFilm).subscribe((film) => {
      expect(film).toEqual(mockFilm);
    });
    const routeTest = controller.expectOne(url + '/' + mockFilm.id);
    expect(routeTest.request.method).toEqual('PUT');
    routeTest.flush({ results: [mockFilm], error: '' });
  });

  it('should delete a film', () => {
    const mockFilm = {} as Film;
    service.deleteFilm(mockFilm).subscribe((data) => {
      expect(data).toEqual(mockFilm);
    });
    const routeTest = controller.expectOne(url + '/' + mockFilm.id);
    expect(routeTest.request.method).toEqual('DELETE');
    routeTest.flush({ results: [mockFilm], error: '' });
  });
});
