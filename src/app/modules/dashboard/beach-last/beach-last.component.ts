import { Component } from '@angular/core';

@Component({
  selector: 'app-beach-last',
  templateUrl: './beach-last.component.html',
  styleUrls: ['./beach-last.component.scss']
})
export class BeachLastComponent {
  conditions = new Map<String, String>();

  lastBeachDay: string = 'October 15';

  constructor() {
    this.conditions.set('Condition1', '15%');
    this.conditions.set('Condition2', '15%');
    this.conditions.set('Condition3', '15%');

  }
}
