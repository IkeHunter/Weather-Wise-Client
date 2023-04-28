import { Component, Input, OnChanges, OnInit } from '@angular/core';
// import { TrimbleMaps } from "@trimblemaps/trimblemaps-js";
import * as TrimbleMaps from "@trimblemaps/trimblemaps-js";
import { Summary } from 'src/app/models/summary.model';
import { Coords } from 'src/app/models/weather.model';
// import {} from 'googlemaps';
// import { google } from '@google/maps';


@Component({
  selector: 'app-radar',
  templateUrl: './radar.component.html',
  styleUrls: ['./radar.component.scss']
})
export class RadarComponent implements OnInit, OnChanges {
  @Input() summary: Summary;
  cityName: string = "";

  trimble = TrimbleMaps;
  coords: Coords = {
    lat: 0,
    lon: 0,
    postal: 0
  }

  constructor() {
    this.trimble.APIKey = "BF81D8E10D38FA46A735FAAAB3B9A29B";
  }



  ngOnInit(): void {
    this.ngOnChanges();
  }

  ngOnChanges() {
    if(this.summary != undefined) {
      this.cityName = this.summary.city;
      console.log("CITY CHAGE CHANGE CHANGE")
      console.log(this.cityName)
    }
    this.coords = JSON.parse(localStorage.getItem("coords")!);

    let myMap = new this.trimble.Map({
      container: "radarMap",
      center: new this.trimble.LngLat(this.coords.lon, this.coords.lat),
      zoom: 9,
      style: TrimbleMaps.Common.Style.SATELLITE,
      interactive: false
    });


    myMap.on('load', function() {
      console.log("map loaded")
      myMap.setWeatherRadarVisibility(true);
      myMap.setTrafficVisibility(true);
    });
    myMap.setWeatherRadarVisibility(true);
  }
}
