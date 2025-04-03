import { ComponentFixture, TestBed } from '@angular/core/testing';

import FilmsComponent from './films.component';
import { HttpClientModule } from '@angular/common/http';
import { StateService } from './services/state.service';
import { RepoService } from './services/repo.service';

describe('FilmsComponent', () => {
  let component: FilmsComponent;
  let fixture: ComponentFixture<FilmsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FilmsComponent, HttpClientModule],
      providers: [StateService, RepoService],
    }).compileComponents();

    fixture = TestBed.createComponent(FilmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
