import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { error } from 'util';

@Injectable()

export class PropertyService {

  constructor(private http: Http) { }

  loadProperties(): Observable<any> {
    const url = 'http://localhost:3000/api/list-properties';
    return this.http.get(url).map(res => res.json());
  }
}

