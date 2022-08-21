import { BadRequestError } from './../common/bad-request-error';
import { NotFoundError } from './../common/not-found-error';
import { AppError } from './../common/app-error';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { Observable, of, throwError } from 'rxjs';

const SEPARATOR = '/';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private url: string, private http: HttpClient) {
  }

  getAll(): Observable<any> {
    return this.http.get(this.url)
      .pipe(
        catchError((error: Response) => this.handleError(error))
      );
  }

  create(resource): Observable<any> {
    console.log('create');
    // return throwError(new BadRequestError());
    return this.http.post(this.url, JSON.stringify(resource))
    .pipe(
      catchError(this.handleError)
    );
  }


  delete(id: number): Observable<any> {
    return this.http.delete(this.url + SEPARATOR + id)
      .pipe(
        catchError(this.handleError) // Pass just the reference of the method
      );
  }

  delete2(id: number): Promise<any> {
    return this.http.delete(this.url + SEPARATOR + id)
    .pipe(
      catchError(this.handleError) // Pass just the reference of the method
    )
    .toPromise();
  }

  private handleError(error: Response): Observable<AppError> {
    if (error.status === 404) {
      return of(new NotFoundError());
    }
    if (error.status === 400) {
      return of(new BadRequestError(error));
    }
    return of(new AppError(error));
  }
}
