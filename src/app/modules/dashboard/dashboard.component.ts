import { Component, OnChanges, OnInit, Output } from '@angular/core';
import { Condition, Summary } from 'src/app/models/summary.model';
import { Coords } from 'src/app/models/weather.model';
import { ApiSummary } from 'src/app/services/api.service';
import { locationEnv } from 'src/environments/environments';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnChanges {
  @Output() pageName = "Dashboard"
  miniWidgets: Condition[];
  summary: Summary;
  postalChange: number;
  coords: Coords = {
    lat: 0,
    lon: 0,
    postal: 0
  }

  constructor(private apiSummary: ApiSummary) {}

  ngOnChanges() {
    console.log("changes have been made");
    // localStorage.setItem("postalCode", this.postalChange.toString());
    // let postalCode = (this.coords.postal === 0) ? localStorage.getItem("postalCode") : this.coords.postal;

    this.apiSummary.getSummary().subscribe((data: Summary[]) => {
      // let postalCode: number = +localStorage.getItem("postalCode")! as number;
      let postalCode = (this.coords.postal === 0) ? localStorage.getItem("postalCode") : this.coords.postal;
      console.log("new postal code: " + localStorage.getItem("postalCode"))
      if(data.length > 0) {
        console.log("data: ");
        console.log(data);
        // this.summary = new Summary(data[0]);

        for(let i = 0; i < data.length; i++) {
          console.log("data[i].location: " + data[i].location, " this.coords.postal: " + this.coords.postal);
          if(data[i].location == postalCode) {
            this.summary = new Summary(data[i]);
            console.log("postal code found")
            break;
          }
          console.log("postal code not found")
          // this.summary = new Summary(data[0]);
        }

        this.miniWidgets = this.summary.widgets;

        this.miniWidgets = this.miniWidgets.sort((a, b) => 0.5 - Math.random());
        console.log("mini widgets: ");
        console.log(this.miniWidgets);
      }
    })
  }

  ngOnInit() {
    this.ngOnChanges();
    // this.apiSummary.getSummary().subscribe((data: Summary[]) => {
    //   if(data.length > 0) {
    //     console.log("data: ");
    //     console.log(data);
    //     this.summary = new Summary(data[0]);
    //     this.miniWidgets = this.summary.widgets;

    //     this.miniWidgets = this.miniWidgets.sort((a, b) => 0.5 - Math.random());
    //     console.log("mini widgets: ");
    //     console.log(this.miniWidgets);
    //   }
    // })
  }
  changePostalCode(coords: Coords) {
    console.log("coords changed in dashboard");
    console.log(coords);

    this.coords = coords;

    // this.locationEnv
    localStorage.setItem("coords", JSON.stringify(coords))
    this.ngOnChanges();



    // this.apiSummary.getSummary(coords.lat, coords.lon);


    // this.apiSummary.getSummary(coords.lat, coords.lon).subscribe((data: Summary[]) => {
    //   if(data.length > 0) {
    //     console.log("data: ");
    //     console.log(data);
    //     this.summary = new Summary(data[0]);
    //     this.miniWidgets = this.summary.widgets;

    //     this.miniWidgets = this.miniWidgets.sort((a, b) => 0.5 - Math.random());
    //     console.log("mini widgets: ");
    //     console.log(this.miniWidgets);
    //   }
    // });
  }
}
