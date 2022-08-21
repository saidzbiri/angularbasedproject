import { DataService } from './data.service';
import { BadRequestError } from './../common/bad-request-error';
import { NotFoundError } from './../common/not-found-error';
import { AppError } from './../common/app-error';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

const SEPARATOR = '/';

@Injectable({
  providedIn: 'root'
})
export class PostService extends DataService{

  constructor(http: HttpClient) {
    super('http://jsonplaceholder.typicode.com/posts', http);
  }

}
