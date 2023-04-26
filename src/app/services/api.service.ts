import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry, map } from 'rxjs/operators';
import { Package } from '../models/package.model';
import { Condition, Summary } from '../models/summary.model';
import { SearchCriteria } from '../models/weather.model';
import { Resolve } from '@angular/router';
import { locationEnv } from 'src/environments/environments';
// import 'rxjs/Rx';

// export interface Package {
//   title: string;
//   data: number;
// }
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
export class ApiInitialize implements Resolve<any> {
  baseUrl = 'http://localhost:8000/weather/initialize?';

  constructor(private http: HttpClient) { }

  resolve() {
    return this.initialize();
  }

  initialize(): Observable<JSON> {
    // let cords = getCoords();
    let cords = {lat: 29.6330969, lon: -82.3570501}
    let url = this.baseUrl + 'lat=' + cords.lat + '&long=' + cords.lon;
    return this.http.get<JSON>(url);
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
    return this.http.get<Summary[]>(this.baseUrl).pipe(
      map((data: any) => {
        for(let i = 0; i < data.length; i++) {
          // data[i] = new Summary(data[i]);
          if(data[i].location == locationEnv.postal_code) {
            return data[i];
          }
        }

        return data
      })

    )
    // return this.http.get<Summary[]>(this.baseUrl);



    // this.http.get<Summary[]>(this.baseUrl).subscribe((data: any) => {
    //   for(let i = 0; i < data.length; i++) {
    //     // data[i] = new Summary(data[i]);
    //     if(data[i].location == locationEnv.postal_code) {
    //       return [data[i]];
    //     }

    //   }

    // })
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
    // let url = this.baseUrl + '?start=' + data.startDate + '&end=' + data.endDate + '&temperature=' + data.temperature + '&precipitation=' + data.precipitation + '&humidity=' + data.humidity;

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

