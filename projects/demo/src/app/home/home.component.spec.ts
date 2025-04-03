import { ComponentFixture, TestBed } from '@angular/core/testing';

import HomeComponent from './home.component';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from '../user/services/user.service';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeComponent, HttpClientModule],
      providers: [UserService],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
