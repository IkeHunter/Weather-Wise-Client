import { Injectable } from '@angular/core';
import { ApiSummary } from './api.service';
import { Condition, Summary } from '../models/summary.model';
import { AsyncSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MiniWidgetsService {
  private summary: Observable<Summary> = new Observable<Summary>();
  index: number = 0;

  constructor(private apiService: ApiSummary) {
    // this.apiService.getSummary().subscribe((data: Summary[]) => {
    //   this.summary = data[0];
    //   // this.summary.next(data[0])
    //   // this.summary.complete()
    // })
  }

  getWidgetData(widgets: Condition[], title: string) {
    return widgets.filter(widget => widget.widget_title == title)[0];

  }

}
