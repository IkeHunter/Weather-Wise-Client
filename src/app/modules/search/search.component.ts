import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Condition } from 'src/app/models/summary.model';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  topResults: Condition[] = [];
  allResults: Condition[] = [];

  constructor() { }

  collectDays(days: Condition[]) {
    this.topResults = [];
    this.allResults = [];

    this.allResults = days;

    // for(let i = 0; i < 3; i++) {
    //   this.topResults.push(days[i]);
    // }
    for(let day of days) {
      if(day.widget_title == "top_result") {
        this.topResults.push(day);
      }
    }
  }

}
