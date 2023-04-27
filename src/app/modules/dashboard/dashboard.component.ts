import { Component, OnInit, Output } from '@angular/core';
import { Condition, Summary } from 'src/app/models/summary.model';
import { ApiSummary } from 'src/app/services/api.service';
import { locationEnv } from 'src/environments/environments';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  @Output() pageName = "Dashboard"
  miniWidgets: Condition[];
  summary: Summary;

  constructor(private apiSummary: ApiSummary) {}

  ngOnInit() {
    this.apiSummary.getSummary().subscribe((data: any) => {
      this.summary = new Summary(data[0]);
      this.miniWidgets = this.summary.widgets;

      this.miniWidgets = this.miniWidgets.sort((a, b) => 0.5 - Math.random());
      console.log("mini widgets: ");
      console.log(this.miniWidgets);


    })
  }
}
