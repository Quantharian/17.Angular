import { TestBed } from '@angular/core/testing';

import { StateService } from './state.service';
import { RepoService } from './repo.service';
import { of } from 'rxjs';
import { Film } from '../../core/types/film';

const mockRepoService: RepoService = jasmine.createSpyObj('RepoService', {
  loadFilms: of([{ id: '1' }]),
  getFilmById: of([]),
  deleteFilm: of(),
  createFilm: of({ id: '1' }),
  updateFilm: of({ id: '1' }),
});

describe('StateService', () => {
  let service: StateService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [],
      providers: [
        RepoService,
        {
          provide: RepoService,

          useValue: mockRepoService,
        },
      ],
    });
    service = TestBed.inject(StateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
    expect(mockRepoService.loadFilms).toHaveBeenCalled();
    // Assuming there is a public method to get films, replace _films with that method
    expect(service.getFilms()).toEqual([{ id: '1' } as Film]);
  });
});
