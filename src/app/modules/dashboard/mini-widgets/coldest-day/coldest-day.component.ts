import { Component } from '@angular/core';

@Component({
  selector: 'app-coldest-day',
  templateUrl: './coldest-day.component.html',
  styleUrls: ['./coldest-day.component.scss']
})
export class ColdestDayComponent {
  conditions = new Map<String, String>();

  coldestDay: string = 'October 15';

  constructor() {
    this.conditions.set('Condition1', '15%');
    this.conditions.set('Condition2', '15%');
    this.conditions.set('Condition3', '15%');

  }
}
