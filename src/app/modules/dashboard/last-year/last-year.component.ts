import { Component } from '@angular/core';

@Component({
  selector: 'app-last-year',
  templateUrl: './last-year.component.html',
  styleUrls: ['./last-year.component.scss']
})
export class LastYearComponent {
  conditions = new Map<String, String>();

  averageTemp: number = 88;
  chanceOfRain: number = 20;

  constructor() {
    this.conditions.set('Condition1', '15%');
    this.conditions.set('Condition2', '15%');
    this.conditions.set('Condition3', '15%');
    this.conditions.set('Condition4', '15%');
    this.conditions.set('Condition5', '15%');
    this.conditions.set('Condition6', '15%');
    this.conditions.set('Condition7', '15%');
    this.conditions.set('Condition8', '15%');

  }
}
