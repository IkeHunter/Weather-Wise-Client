import { Component } from '@angular/core';

@Component({
  selector: 'app-forcast',
  templateUrl: './forcast.component.html',
  styleUrls: ['./forcast.component.scss']
})
export class ForcastComponent {
  barWidth: number = 70;

  forecastIntervals = new Map<String, number>();

  constructor() {
    this.forecastIntervals.set('01:00', this.randomInt());
    this.forecastIntervals.set('02:00', this.randomInt());
    this.forecastIntervals.set('03:00', this.randomInt());
    this.forecastIntervals.set('04:00', this.randomInt());
    this.forecastIntervals.set('05:00', this.randomInt());
    this.forecastIntervals.set('06:00', this.randomInt());
    this.forecastIntervals.set('07:00', this.randomInt());
    this.forecastIntervals.set('08:00', this.randomInt());
    this.forecastIntervals.set('09:00', this.randomInt());
    this.forecastIntervals.set('10:00', this.randomInt());
  }

  randomInt() {
    return Math.floor(Math.random() * 100);
  }
}
