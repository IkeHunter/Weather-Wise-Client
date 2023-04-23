import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry, map } from 'rxjs/operators';
import { Package } from '../models/package.model';
import { Condition, Summary } from '../models/summary.model';
import { SearchCriteria } from '../models/weather.model';

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

@Injectable({
  providedIn: 'root'
})
export class ApiSearch {
  baseUrl = 'http://localhost:8000/weather/search/';
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient) { }

  searchDays(data: SearchCriteria): Observable<Condition[]> {
    let body = {
      date_start: data.startDate,
      date_end: data.endDate,
      temperature: data.temperature,
      precipitation: data.precipitation,
      humidity: data.humidity
    }

    let json = JSON.stringify(body);

    return this.http.post<Condition[]>(this.baseUrl, json, {headers: this.headers});
  }

  // searchDays(dateStart: string, dateEnd: string, temperature: number, precipitation: number, humidity: number): Observable<Condition[]> {
  //   let body = {
  //     "date_start": dateStart,
  //     "date_end": dateEnd,
  //     "temperature": temperature,
  //     "precipitation": precipitation,
  //     "humidity": humidity
  //   }

  //   let json = JSON.stringify(body);

  //   return this.http.post<Condition[]>(this.baseUrl, json);
  // }
}

