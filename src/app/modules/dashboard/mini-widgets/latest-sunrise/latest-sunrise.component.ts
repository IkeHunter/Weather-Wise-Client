import { Component } from '@angular/core';

@Component({
  selector: 'app-latest-sunrise',
  templateUrl: './latest-sunrise.component.html',
  styleUrls: ['./latest-sunrise.component.scss']
})
export class LatestSunriseComponent {
  conditions = new Map<String, String>();

  latestSunrise: string = 'October 15';

  constructor() {
    this.conditions.set('Condition1', '15%');
    this.conditions.set('Condition2', '15%');
    this.conditions.set('Condition3', '15%');

  }
}
