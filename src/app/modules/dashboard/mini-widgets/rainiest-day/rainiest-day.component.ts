import { Component } from '@angular/core';

@Component({
  selector: 'app-rainiest-day',
  templateUrl: './rainiest-day.component.html',
  styleUrls: ['./rainiest-day.component.scss']
})
export class RainiestDayComponent {
  conditions = new Map<String, String>();

  rainiestDay: string = 'October 15';

  constructor() {
    this.conditions.set('Condition1', '15%');
    this.conditions.set('Condition2', '15%');
    this.conditions.set('Condition3', '15%');

  }
}
