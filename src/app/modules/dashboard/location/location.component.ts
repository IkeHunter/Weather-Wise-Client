import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Summary } from 'src/app/models/summary.model';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss']
})
export class LocationComponent implements OnChanges {
  @Input() summary: Summary;

  cityName: string = "";
  postalCode: number = 0;

  ngOnChanges(changes: SimpleChanges) {
    if(this.summary != undefined) {
      this.cityName = this.summary.city;
      this.postalCode = this.summary.location;
    }
  }

}
