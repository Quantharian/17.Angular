import { Component } from '@angular/core';
import { FilmComponent } from '../film/film.component';
import { AddFilmComponent } from '../add.film/add.film.component';
import { Film } from '../../types/film';

@Component({
  selector: 'cas-list',
  imports: [FilmComponent, AddFilmComponent],
  template: `
    <cas-add></cas-add>
    <cas-film></cas-film>
  `,
  styles: ``,
})
export class ListComponent {
  films: Film[] = FILMS;
}
