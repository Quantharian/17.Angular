import { HttpClient } from '@angular/common/http';
import { Token } from '@angular/compiler';
import { inject, Injectable } from '@angular/core';

type UserLogin = {
  email: string;
  password: string;
};

type ApiResponse = {
  results: Token[];
  error: string;
};

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private url = 'http://localhots:3000/api/users';
  private httpClient = inject(HttpClient);
  token: string | null = null;

  login(data: UserLogin) {
    console.log(data);
    const url = this.url + '/login';
    this.httpClient.post(url, data).subscribe({
      next: (response) => {
        console.log(response);
      },
      error: (error) => {
        console.error('Error login user', error);
      },
    });
  }

  getToken() {
    this.token = localStorage.getItem('token');
    console.log(this.token);
  }
}
