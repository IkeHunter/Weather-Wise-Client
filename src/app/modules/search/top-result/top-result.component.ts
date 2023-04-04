import { Component } from '@angular/core';

@Component({
  selector: 'app-top-result',
  templateUrl: './top-result.component.html',
  styleUrls: ['./top-result.component.scss']
})
export class TopResultComponent {
  conditions = new Map<String, String>();


  constructor() {
    this.conditions.set('Percipitation1', '15%');
    this.conditions.set('Percipitation2', '15%');
    this.conditions.set('Percipitation3', '15%');
    this.conditions.set('Percipitation4', '15%');

  }
}
