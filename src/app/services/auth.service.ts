import { map, catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable()
export class AuthService {
  constructor(private http: HttpClient) {
  }

  login(credentials): Observable<boolean> {
    console.log(credentials);
    return this.http.post('/api/authenticate',
      JSON.stringify(credentials))
      .pipe(
        map((response: Response) => {
          console.log('response', response);

          if (response && response['token']) {
            localStorage.setItem('token', response['token']);
            return true;
          }
          return false;
        })
      );
  }

  logout() {
    localStorage.removeItem('token');
  }

  isLoggedIn() {
    const helper = new JwtHelperService();
    const token = localStorage.getItem('token');

    if (!token) {
      return false;
    }
    const expirationDate = helper.getTokenExpirationDate(token);
    const isExpired = helper.isTokenExpired(token);

    console.log('Expiration: ', expirationDate);
    console.log('isExpired: ', isExpired);
    return !isExpired;
  }

  get currentUser() {
    const helper = new JwtHelperService();
    const token = localStorage.getItem('token');

    if (!token) {
      return false;
    }

    return helper.decodeToken(token);
  }
}

