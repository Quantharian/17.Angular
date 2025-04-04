import { TestBed } from '@angular/core/testing';

import { UserService } from './user.service';
import {
  HttpTestingController,
  provideHttpClientTesting,
} from '@angular/common/http/testing';
import { provideHttpClient } from '@angular/common/http';

const urlBase = 'http://localhost:3000';
const url = new URL('/api/users', urlBase);

describe('UserService', () => {
  let service: UserService;
  let controller: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [],
      providers: [provideHttpClientTesting(), provideHttpClient()],
    });
    service = TestBed.inject(UserService);
    controller = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Should getUserById', () => {
    // Arrange
    const testRequest = controller.expectOne(url.toString() + '/1');
    testRequest.flush([{}]);
    // Act
    service.getUserById('1');
    // Assert
    expect(testRequest.request.method).toEqual('GET');
  });
});
