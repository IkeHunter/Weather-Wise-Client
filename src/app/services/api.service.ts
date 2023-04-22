import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry, map } from 'rxjs/operators';
import { Package } from '../models/package.model';
import { Summary } from '../models/summary.model';

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

@Injectable({
  providedIn: 'root'
})
export class ApiSummary {
  baseUrl = 'http://localhost:8000/weather/summary/';

  constructor(private http: HttpClient) { }

  getSummary(): Observable<Summary[]> {
    console.log("data")
      console.log(this.http.get<Summary[]>(this.baseUrl))
    // return this.http.get<Summary[]>(this.baseUrl).pipe(
    //   map(data => data.map(dataJson => new Summary(dataJson)))

    // )
    return this.http.get<Summary[]>(this.baseUrl);
  }
}

