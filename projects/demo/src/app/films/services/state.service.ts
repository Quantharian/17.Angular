import { inject, Injectable } from '@angular/core';
import { RepoService } from './repo.service';
import { Film } from '../types/film';
@Injectable({
  providedIn: 'root',
})
export class StateService {
  private films: Film[] = [];
  repo = inject(RepoService);
  constructor() {
    this.repo.loadFilms().then((films) => {
      this.films = films;
    });
  }
  getFilms() {
    return this.films;
  }
  async getFilmsAsync() {
    return await this.repo.loadFilms();
  }
}
