import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Summary } from 'src/app/models/summary.model';
import { ApiSummary } from 'src/app/services/api.service';

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
    this.conditions.set('Average Temperature', '15%');
    this.conditions.set('Condition2', '15%');
    this.conditions.set('Condition3', '15%');
    this.conditions.set('Condition4', '15%');
    this.conditions.set('Condition5', '15%');
    this.conditions.set('Condition6', '15%');
    this.conditions.set('Condition7', '15%');
    this.conditions.set('Condition8', '15%');

  }

}
