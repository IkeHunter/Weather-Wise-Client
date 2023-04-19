import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Package } from '../models/package.model';

// export interface Package {
//   title: string;
//   data: number;
// }

@Injectable({
  providedIn: 'root'
})

export class ApiService {
  baseUrl = 'http://localhost:8000/core/packages/';

  constructor(private http: HttpClient) { }

  getPackage(): Observable<Package> {
    return this.http.get<Package>(this.baseUrl);
  }
}
