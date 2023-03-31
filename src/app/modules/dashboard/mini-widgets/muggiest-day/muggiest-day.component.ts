import { Component } from '@angular/core';

@Component({
  selector: 'app-muggiest-day',
  templateUrl: './muggiest-day.component.html',
  styleUrls: ['./muggiest-day.component.scss']
})
export class MuggiestDayComponent {
  conditions = new Map<String, String>();

  muggiestDay: string = 'October 15';

  constructor() {
    this.conditions.set('Condition1', '15%');
    this.conditions.set('Condition2', '15%');
    this.conditions.set('Condition3', '15%');

  }
}
