import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Summary } from 'src/app/models/summary.model';
import { ConditionMapPipe } from 'src/app/pipes/conditions.pipe';
import { ApiSummary } from 'src/app/services/api.service';

@Component({
  selector: 'app-last-year',
  templateUrl: './last-year.component.html',
  styleUrls: ['./last-year.component.scss']
})
export class LastYearComponent implements OnChanges {
  @Input() summary: Summary;
  // summary: Summary;
  getCondition = new ConditionMapPipe().transform;

  conditions = new Map<String, String>();

  averageTemp: number = 0;
  rainLevel: number = 0;
  humidity: number = 0;
  date: number = 0;

  constructor(private apiService: ApiSummary) {}

  ngOnChanges(changes: SimpleChanges) {
    if(this.summary != undefined) {
      this.averageTemp = this.summary.last_year.average_temp;
      this.rainLevel = this.summary.last_year.rain_level;
      this.humidity = this.summary.last_year.humidity;
      this.date = this.summary.last_year.date;

      this.conditions = this.getCondition(this.summary.last_year);
    }
  }

  ngOnInit() {

  //   this.apiService.getSummary().subscribe((data: Summary[]) => {
  //     this.summary = data[0];

  //     this.averageTemp = this.summary.last_year.average_temp;
  //     this.chanceOfRain = this.summary.last_year.pop;
  //     this.humidity = this.summary.last_year.humidity;

  //     this.conditions = this.getCondition(this.summary.last_year);
  //   })
  }
}
