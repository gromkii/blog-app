import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class DataStorageService {
  url:string = 'http://127.0.0.1:3000/api';

  constructor(
    private http:Http
  ) {}

  getPosts() {
    return this.http.get(this.url + '/posts');
  }
}
