import { Component } from '@angular/core';

@Component({
  selector: 'app-current-conditions',
  templateUrl: './current-conditions.component.html',
  styleUrls: ['./current-conditions.component.scss']
})
export class CurrentConditionsComponent {
  conditions1 = new Map<String, String>();
  conditions2 = new Map<String, String>();

  averageTemp: number = 65;
  chanceOfRain: number = 15;
  humidity: number = 35;

  constructor() {
    this.conditions1.set('Percipitation1', '15%');
    this.conditions1.set('Percipitation2', '15%');
    this.conditions1.set('Percipitation3', '15%');
    this.conditions2.set('Percipitation4', '15%');
    this.conditions2.set('Percipitation5', '15%');
    this.conditions2.set('Percipitation6', '15%');
  }
}
