import { Component } from '@angular/core';

@Component({
  selector: 'app-hottest-day',
  templateUrl: './hottest-day.component.html',
  styleUrls: ['./hottest-day.component.scss']
})
export class HottestDayComponent {
  conditions = new Map<String, String>();

  hottestDay: string = 'October 15';

  constructor() {
    this.conditions.set('Condition1', '15%');
    this.conditions.set('Condition2', '15%');
    this.conditions.set('Condition3', '15%');

  }
}
