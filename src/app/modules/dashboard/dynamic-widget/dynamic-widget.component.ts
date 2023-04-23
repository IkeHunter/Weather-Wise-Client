import { Component, Input } from '@angular/core';
import { Condition } from 'src/app/models/summary.model';
import { ConditionMapPipe } from 'src/app/pipes/conditions.pipe';
import { ApiSummary } from 'src/app/services/api.service';
import { MiniWidgetsService } from 'src/app/services/mini-widgets.service';

@Component({
  selector: 'app-dynamic-widget',
  templateUrl: './dynamic-widget.component.html',
  styleUrls: ['./dynamic-widget.component.scss']
})
export class DynamicWidgetComponent {
  @Input() widget: string;

  conditions = new Map<String, String>();
  getConditions = new ConditionMapPipe().transform;

  // hottestDay: string = 'October 15';
  date: number = 0;

  constructor(private apiService: ApiSummary, private widgetService: MiniWidgetsService) {

  }

  ngOnInit() {
    console.log("Component widget: ")
    console.log(this.widget);
    this.apiService.getSummary().subscribe((data: any) => {
      // let widgetData = data[0].widgets[0];
      // this.date = data[0].widgets[0].date;
      let widgetData = this.widgetService.getWidgetData(data[0].widgets, this.widget);

      console.log("widget data: ");
      console.log(widgetData);
      this.date = widgetData.date;
      this.conditions = this.getConditions(widgetData);

    })
  }
}
