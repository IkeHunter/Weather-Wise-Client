import { Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { Summary } from 'src/app/models/summary.model';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss']
})
export class LocationComponent implements OnChanges {
  @Input() summary: Summary;
  @ViewChild('f') searchForm: NgForm;

  cityName: string = "";
  postalCode: number = 0;
  newPostalCode: number = 0;

  locationForm = new FormGroup({
    postalCode: new FormControl('')
  })

  ngOnChanges(changes: SimpleChanges) {
    if(this.summary != undefined) {
      this.cityName = this.summary.city;
      this.postalCode = this.summary.location;
    }
  }

  onSubmit() {
    console.log("submit");
    console.log(this.locationForm.value.postalCode)
  }

}
