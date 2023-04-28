import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { Summary } from 'src/app/models/summary.model';
import { Coords, LocationChangeResponse } from 'src/app/models/weather.model';
import { ChangeLocation } from 'src/app/services/api.service';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss']
})
export class LocationComponent implements OnChanges {
  @Input() summary: Summary;
  @ViewChild('f') searchForm: NgForm;
  // @Output() postalChangeEvent = new EventEmitter<number>();
  @Output() coordsChangeEvent = new EventEmitter<Coords>();

  cityName: string = "";
  postalCode: number = 0;
  newPostalCode: number = 0;

  locationForm = new FormGroup({
    postalCode: new FormControl('')
  })

  constructor(private changeLocation: ChangeLocation) { }

  ngOnChanges(changes: SimpleChanges) {
    if(this.summary != undefined) {
      this.cityName = this.summary.city;
      this.postalCode = this.summary.location;
    }
  }

  onSubmit() {
    console.log("submit");
    console.log(this.locationForm.value.postalCode)

    let location: number = ((this.locationForm.value.postalCode === "") ? 0 : +this.locationForm.value.postalCode! as number);

    this.changeLocation.changeLocation(location).subscribe((data: LocationChangeResponse) => {
      console.log(data["success"]);
      // data = JSON.stringify(data)
      console.log(data);
      if(data["success"]) {
        console.log("success");
        let coords = {
          lat: data["latitude"],
          lon: data["longitude"],
          postal: location
        }
        this.coordsChangeEvent.emit(coords);
      }
    });
  }

}
