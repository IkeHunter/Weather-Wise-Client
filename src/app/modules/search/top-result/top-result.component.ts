import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Observable } from 'rxjs';
import { Condition } from 'src/app/models/summary.model';
import { ConditionMapPipe } from 'src/app/pipes/conditions.pipe';

@Component({
  selector: 'app-top-result',
  templateUrl: './top-result.component.html',
  styleUrls: ['./top-result.component.scss']
})
export class TopResultComponent implements OnInit {
  @Input() topResult: Condition;
  conditions = new Map<String, String>();
  conditionMap = new ConditionMapPipe().transform;

  constructor() { }

  ngOnInit() {
    this.conditions = this.conditionMap(this.topResult);
  }

}
