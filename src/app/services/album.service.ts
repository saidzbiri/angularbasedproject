import { DataService } from './data.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class AlbumService extends DataService{

  constructor(http: HttpClient) {
    super('https://jsonplaceholder.typicode.com/albums', http);
  }
}
