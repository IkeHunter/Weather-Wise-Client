import { Component, OnInit } from '@angular/core';
// import {} from 'googlemaps';
// import { google } from '@google/maps';


@Component({
  selector: 'app-radar',
  templateUrl: './radar.component.html',
  styleUrls: ['./radar.component.scss']
})
export class RadarComponent implements OnInit {

  // map: any;
  // async initMap(): Promise<void> {
  //   // The location of Uluru
  //   const position = { lat: -25.344, lng: 131.031 };

  //   // Request needed libraries.
  //   //@ts-ignore
  //   const { Map } = await google.maps.importLibrary("maps") as google.maps.MapsLibrary;
  //   const { AdvancedMarkerView } = await google.maps.importLibrary("marker") as google.maps.MarkerLibrary;

  //   // The map, centered at Uluru
  //   this.map = new Map(
  //     document.getElementById('map') as HTMLElement,
  //     {
  //       zoom: 4,
  //       center: position,
  //       mapId: 'DEMO_MAP_ID',
  //     }
  //   );

  //   // The marker, positioned at Uluru
  //   const marker = new AdvancedMarkerView({
  //     map: this.map,
  //     position: position,
  //     title: 'Uluru'
  //   });
  // }
  // http://maps.openweathermap.org/maps/2.0/weather/TA2/{z}/{x}/{y}?date=1527811200&opacity=0.9&fill_bound=true&appid={API key}
  // zoom = 6;
  // x = 0;
  // y = 0;
  ngOnInit() {
    // window.initMap = initMap;
  }

  // initMap() {
  //   let map = new google.maps.Map(document.getElementById("map")!, {
  //       center: {
  //           lat: 29.6330969,
  //           lng: -82.3570501
  //       },
  //       zoom: 6,
  //   });
  //   var rainMapOverlay = new google.maps.ImageMapType({
  //       getTileUrl: function(coord, zoom) {
  //           // return 'https://www.meteosource.com/api/v1/flexi/map?key=' + METEOSOURCE_API_KEY + '&tile_x=' + coord.x + '&tile_y=' + coord.y + '&tile_zoom=' + zoom + '&datetime=+1hour&variable=temperature'
  //           return 'http://maps.openweathermap.org/maps/2.0/weather/TA2/' + zoom + '/' + coord.x + '/' + coord.y + '?date=1527811200&opacity=0.9&fill_bound=true&appid=79f1b8078781a18fc8918638e6c5ebc3'
  //       },
  //       tileSize: new google.maps.Size(256, 256)
  //   });
  //   map.overlayMapTypes.insertAt(0, rainMapOverlay)
  // }


}
