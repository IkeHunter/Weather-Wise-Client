import { Component, Input, OnInit } from '@angular/core';
import { Summary } from 'src/app/models/summary.model';
import { ConditionMapPipe } from 'src/app/pipes/conditions.pipe';
import { ConditionValuePipe } from 'src/app/pipes/conditions.pipe';
import { ApiSummary } from 'src/app/services/api.service';

@Component({
  selector: 'app-current-conditions',
  templateUrl: './current-conditions.component.html',
  styleUrls: ['./current-conditions.component.scss']
})
export class CurrentConditionsComponent implements OnInit {
  summary: Summary;
  condition = new ConditionValuePipe().transform;
  getCondition = new ConditionMapPipe().transform;

  conditions = new Map<String, String>();
  conditions2 = new Map<String, String>();

  averageTemp: number = 0;
  chanceOfRain: number = 0;
  humidity: number = 0;

  constructor(private apiService: ApiSummary) { }

  ngOnInit() {
    this.apiService.getSummary().subscribe((data: Summary[]) => {
      this.summary = data[0];

      this.averageTemp = this.summary.current_conditions.average_temp;
      this.chanceOfRain = this.summary.current_conditions.pop;
      this.humidity = this.summary.current_conditions.humidity;

      this.conditions = this.getCondition(this.summary.current_conditions);
    })
  }

}
