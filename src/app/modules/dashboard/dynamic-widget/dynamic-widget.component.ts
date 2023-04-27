import { Component, Input } from '@angular/core';
import { Condition, Summary } from 'src/app/models/summary.model';
import { ConditionMapPipe } from 'src/app/pipes/conditions.pipe';
import { ApiSummary } from 'src/app/services/api.service';
import { MiniWidgetsService } from 'src/app/services/mini-widgets.service';

@Component({
  selector: 'app-dynamic-widget',
  templateUrl: './dynamic-widget.component.html',
  styleUrls: ['./dynamic-widget.component.scss']
})
export class DynamicWidgetComponent {
  // @Input() widget: string;
  @Input() widget: Condition;

  // summary: Summary;
  conditions = new Map<String, String>();
  getConditions = new ConditionMapPipe().transform;

  // hottestDay: string = 'October 15';
  date: number = 0;

  constructor(private apiService: ApiSummary, private widgetService: MiniWidgetsService) {

  }

  ngOnInit() {
    this.conditions = this.getConditions(this.widget);
    // console.log("Component widget: ")
    // console.log(this.widget);
    // this.apiService.getSummary().subscribe((data: Summary[]) => {
    //   // let widgetData = data[0].widgets[0];
    //   // this.date = data[0].widgets[0].date;
    //   // this.widgetData = this.widgetService.getWidgetData(data[0].widgets, this.widget);
    //   // this.summary = data[0];

    //   // console.log("widget data: ");
    //   // console.log(widgetData);
    //   // this.date = widgetData.date;
    //   // this.widgetData = data[0]

      // this.conditions = this.getConditions(this.widget);

    // })
  }
}
