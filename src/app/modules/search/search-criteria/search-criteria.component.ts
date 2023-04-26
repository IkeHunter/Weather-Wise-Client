import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Condition } from 'src/app/models/summary.model';
import { ApiSearch } from 'src/app/services/api.service';

@Component({
  selector: 'app-search-criteria',
  templateUrl: './search-criteria.component.html',
  styleUrls: ['./search-criteria.component.scss']
})
export class SearchCriteriaComponent {
  @Output() searchData = new EventEmitter<Condition[]>();
  @ViewChild('f') searchForm: NgForm;

  buttonEnabled: boolean = true;

  searchCriteria = {
    startDate: '',
    endDate: '',
    temperature: 0,
    precipitation: 0,
    humidity: 0
  }

  constructor(private apiSearch: ApiSearch) {}


  onSubmit() {
    let searchResponse = this.searchForm.value.criteria;

    // this.searchCriteria.startDate = searchResponse.startDate;
    // this.searchCriteria.endDate = searchResponse.endDate;
    this.searchCriteria.startDate = (Math.floor(new Date(searchResponse.startDate).getTime() / 1000)).toString();
    this.searchCriteria.endDate = (Math.floor(new Date(searchResponse.endDate).getTime() / 1000)).toString();
    this.searchCriteria.temperature = searchResponse.temperature;
    this.searchCriteria.precipitation = searchResponse.precipitation;
    this.searchCriteria.humidity = searchResponse.humidity;

    this.buttonEnabled = false;

    this.apiSearch.searchDays(this.searchCriteria).subscribe((data: Condition[]) => {
      this.buttonEnabled = true;
      this.searchData.emit(data);
    })


  }
}
