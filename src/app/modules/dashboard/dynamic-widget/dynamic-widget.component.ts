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
  @Input() widget: Condition;

  conditions = new Map<String, String>();
  getConditions = new ConditionMapPipe().transform;
  date: number = 0;

  ngOnInit() {
    this.conditions = this.getConditions(this.widget);
  }
}
