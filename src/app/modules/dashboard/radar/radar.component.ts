import { Component, Input, OnChanges, OnInit } from '@angular/core';
// import { TrimbleMaps } from "@trimblemaps/trimblemaps-js";
import * as TrimbleMaps from "@trimblemaps/trimblemaps-js";
import { Summary } from 'src/app/models/summary.model';
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

  constructor() {
    this.trimble.APIKey = "BF81D8E10D38FA46A735FAAAB3B9A29B";
  }



  ngOnInit(): void {
    let myMap = new this.trimble.Map({
      container: "radarMap",
      center: new this.trimble.LngLat(-82.3570501, 29.6330969),
      zoom: 9,
      style: TrimbleMaps.Common.Style.SATELLITE,
      interactive: false
    });

    myMap.setWeatherRadarVisibility(true);
    myMap.on('load', function() {
      console.log("map loaded")
      myMap.setWeatherRadarVisibility(true);
      myMap.setTrafficVisibility(true);
    });
  }

  ngOnChanges() {
    if(this.summary != undefined) {
      this.cityName = this.summary.city;
    }
  }
}
