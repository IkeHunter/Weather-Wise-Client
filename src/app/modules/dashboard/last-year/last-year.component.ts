import { Component } from '@angular/core';
import { Summary } from 'src/app/models/summary.model';
import { ConditionMapPipe } from 'src/app/pipes/condition-map.pipe';
import { ApiSummary } from 'src/app/services/api.service';

@Component({
  selector: 'app-last-year',
  templateUrl: './last-year.component.html',
  styleUrls: ['./last-year.component.scss']
})
export class LastYearComponent {
  summary: Summary;
  getCondition = new ConditionMapPipe().transform;

  conditions = new Map<String, String>();

  averageTemp: number = 0;
  chanceOfRain: number = 0;
  humidity: number = 0;

  constructor(private apiService: ApiSummary) {}

  ngOnInit() {
    this.apiService.getSummary().subscribe((data: Summary[]) => {
      this.summary = data[0];

      this.averageTemp = this.summary.last_year.average_temp;
      this.chanceOfRain = this.summary.last_year.pop;
      this.humidity = this.summary.last_year.humidity;

      this.conditions = this.getCondition(this.summary.last_year);
    })
  }
}
