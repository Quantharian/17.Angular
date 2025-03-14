import { Component, inject } from '@angular/core';
import { AddEditComponent } from '../add.edit/add.edit.component';
import { FilmComponent } from '../film/film.component';
import { Film } from '../../types/film';
import { RepoService } from '../../services/repo.service';

@Component({
  selector: 'cas-list',
  imports: [AddEditComponent, FilmComponent],
  template: `
    <cas-add-edit [isAdding]="true" (addEvent)="addFilm($event)"></cas-add-edit>
    <h3>Listado de películas</h3>
    <ul>
      @for (film of films; track film.id) {
        <li>
          <cas-film [film]="film" (eventDelete)="deleteFilm($event)">
            <cas-add-edit
              [isAdding]="false"
              [film]="film"
              (editEvent)="updateFilm($event)"
            ></cas-add-edit>
          </cas-film>
        </li>
      }
    </ul>
  `,
  styles: `
    :host {
      display: block;
      border: 1px solid #ccc;
      padding: 10px;
      margin-top: 10px;
    }
  `,
})
export class ListComponent {
  filmaRepo = inject(RepoService);
  films: Film[] = [];
  data = structuredClone(this.films);

  constructor() {
    this.filmaRepo.loadFilms().then((films) => {
      this.films = films;
    });
  }

  deleteFilm(id: string) {
    this.films = this.films.filter((film) => film.id !== id);
  }

  addFilm(film: Film) {
    this.films = [...this.films, film];
  }
  updateFilm(film: Film) {
    this.films = this.films.map((f) =>
      f.id === film.id
        ? { ...f, title: film.title, releaseYear: film.releaseYear }
        : f,
    );
  }
}
