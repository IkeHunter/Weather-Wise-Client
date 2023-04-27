import { Component, OnInit, Output } from '@angular/core';
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
  @Output() pageName = "Search"

  constructor() { }

  collectDays(days: Condition[]) {
    this.topResults = [];
    this.allResults = [];

    this.allResults = days;

    for(let i = 0; i < 3; i++) {
      let temp = JSON.parse(JSON.stringify(days[i]));
      this.topResults.push(temp);
    }
  }

}
