import { Injectable } from '@angular/core';
import { Film } from '../types/film';
import { FILMS } from '../../../../data/films';

@Injectable({
  providedIn: 'root',
})
export class RepoService {
  films: Film[] = FILMS;

  loadFilms(): Promise<Film[]> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(FILMS);
      }, 1000);
    });
  }
}
