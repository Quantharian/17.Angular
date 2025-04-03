import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmComponent } from './film.component';
import { HttpClientModule } from '@angular/common/http';
import { StateService } from '../../services/state.service';
import { RepoService } from '../../services/repo.service';
import { ActivatedRoute } from '@angular/router';

describe('FilmComponent', () => {
  let component: FilmComponent;
  let fixture: ComponentFixture<FilmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FilmComponent, HttpClientModule],
      providers: [StateService, RepoService, ActivatedRoute],
    }).compileComponents();

    fixture = TestBed.createComponent(FilmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
