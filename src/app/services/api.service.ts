import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry, map } from 'rxjs/operators';
import { Package } from '../models/package.model';
import { Condition, Summary } from '../models/summary.model';
import { SearchCriteria } from '../models/weather.model';
import { locationEnv } from 'src/environments/environments';

interface Coords {
  lat: number;
  lon: number;
}

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
    let initUrl = 'http://localhost:8000/weather/initialize?';
    // let cords = {lat: 29.6330969, lon: -82.3570501}
    let coords = getCoords();
    let url = initUrl + 'lat=' + coords.lat + '&long=' + coords.lon;
    return this.http.get<JSON>(url).pipe((data:any) => {
      return this.http.get<Summary[]>(this.baseUrl);
    });
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
      start: data.startDate,
      end: data.endDate,
      temperature: data.temperature,
      precipitation: data.precipitation,
      humidity: data.humidity,
      location: locationEnv.postal_code
    }

    let json = JSON.stringify(body);

    return this.http.post<Condition[]>(this.baseUrl, json, {headers: this.headers}).pipe(
      map((data: any) => {
        data = JSON.parse(data);
        let result: Array<Condition> = [];
        for(let i = 0; i < 50; i++) {
          if(data[i]) {
            let day: Condition = data[i] as Condition;
            result.push(day);
          }
        }
        return result
      })
    )
  }

}

function getCoords(): Coords {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      let coords: Coords = {
        lat: position.coords.latitude,
        lon: position.coords.longitude
      }
      return coords;
    });
  } else {
    window.alert("Allow location services to use this feature");
  }
  let coords: Coords = {
    lat: 29.6330969,
    lon: -82.3570501
  }
  return coords;
}

