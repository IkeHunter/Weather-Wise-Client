import { Component, OnInit } from '@angular/core';
import { Summary } from 'src/app/models/summary.model';
import { ApiSummary } from 'src/app/services/api.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  summary: Summary;

  constructor(private apiSummary: ApiSummary) {}

  ngOnInit() {
    this.apiSummary.getSummary().subscribe((data: Summary[]) => {
      this.summary = data[0];
    })
  }

}
