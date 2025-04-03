import { ComponentFixture, TestBed } from '@angular/core/testing';

import FilmDetailComponent from './film.detail.component';
import { HttpClientModule } from '@angular/common/http';
import { RepoService } from './services/repo.service';
import { StateService } from './services/state.service';

describe('FilmDetailComponent', () => {
  let component: FilmDetailComponent;
  let fixture: ComponentFixture<FilmDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FilmDetailComponent, HttpClientModule],
      providers: [RepoService, StateService],
    }).compileComponents();

    fixture = TestBed.createComponent(FilmDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
