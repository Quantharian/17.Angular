import { inject, Injectable } from '@angular/core';
import { Film } from '../types/film';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { UserService } from '../../user/services/user.service';
import { Token } from '@angular/compiler';

type ApiResponse = {
  results: Film[];
  error: string;
};

@Injectable({
  providedIn: 'root',
})
export class RepoService {
  url = 'http://localhost:3000/api/films';
  httpClient = inject(HttpClient);
  userService = inject(UserService);

  loadFilms(): Observable<Film[]> {
    console.log(this.userService, Token);
    return this.httpClient
      .get<ApiResponse>(this.url)
      .pipe(map((r) => r.results));
  }

  createFilm(film: Omit<Film, 'id'>): Observable<Film> {
    film.description = 'Created by Angular';
    film.director = 'Director';
    film.rating = 5;
    film.poster = 'https://via.placeholder.com/150';
    film.categories = ['Action'];
    film.duration = 120;

    return this.httpClient
      .post<ApiResponse>(this.url, film, {
        headers: {
          Authorization: 'Bearer ${this.userService.token}',
        },
      })
      .pipe(map((r) => r.results[0]));
  }

  // updateFilm(film: Film): Observable<Film> {
  //   film.description = 'Created by Angular';
  //   film.director = 'Director';
  //   film.rating = 5;
  //   film.poster = 'https://via.placeholder.com/150';
  //   film.categories = ['Action'];
  //   film.duration = 120;

  //   return this.httpClient.put<ApiResponse
}
