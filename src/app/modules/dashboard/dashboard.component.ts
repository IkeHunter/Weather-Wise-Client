import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Summary } from 'src/app/models/summary.model';
import { ApiSummary } from 'src/app/services/api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  // response: Observable<Summary> = new ApiSummary(http).getSummary();
  // summary: Summary
  // summary = {} as Summary;

  // constructor(private apiService: ApiSummary) {
  //   this.apiService.getSummary().subscribe((data: Summary) => {
  //     // console.log(data);
  //     // this.summary = data;
  //   })
  // }



}
