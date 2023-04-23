import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  allWidgets = [
    "hottest_day",
    "coldest_day",
    // "rainiest_day",
    "latest_sunrise",
    "muggiest_day",
    "earliest_sunrise",
    "latest_sunset",
    "earliest_sunset",
  ]
  widgets: string[] = []

  constructor() {
    for(let i = 0; i < 5; i++) {
      this.widgets.push(this.allWidgets[i]);
    }
  }



}
