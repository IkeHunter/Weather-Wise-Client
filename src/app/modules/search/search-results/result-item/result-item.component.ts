import { Component, Input } from '@angular/core';
import { Condition } from 'src/app/models/summary.model';
import { ConditionMapPipe } from 'src/app/pipes/conditions.pipe';

@Component({
  selector: 'app-result-item',
  templateUrl: './result-item.component.html',
  styleUrls: ['./result-item.component.scss']
})
export class ResultItemComponent {
  @Input() result: Condition;
  conditionMap = new ConditionMapPipe().transform;
  resultConditions: Map<String, String>;

  ngOnInit() {
    this.resultConditions = this.conditionMap(this.result);
  }
}
