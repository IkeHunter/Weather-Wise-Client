import { Component } from '@angular/core';

@Component({
  selector: 'app-average-conditions',
  templateUrl: './average-conditions.component.html',
  styleUrls: ['./average-conditions.component.scss']
})
export class AverageConditionsComponent {
  conditions = new Map<String, String>();

  averageTemp: number = 83;
  chanceOfRain: number = 18;

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
