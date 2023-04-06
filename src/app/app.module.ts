import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { SearchComponent } from './modules/search/search.component';
import { HeaderComponent } from './shared/header/header.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { RadarComponent } from './modules/dashboard/radar/radar.component';
import { AverageConditionsComponent } from './modules/dashboard/average-conditions/average-conditions.component';
import { LastYearComponent } from './modules/dashboard/last-year/last-year.component';
import { BeachLastComponent } from './modules/dashboard/beach-last/beach-last.component';
import { BeachClosestComponent } from './modules/dashboard/beach-closest/beach-closest.component';
import { ForcastComponent } from './modules/dashboard/forcast/forcast.component';
import { CurrentConditionsComponent } from './modules/dashboard/current-conditions/current-conditions.component';
import { LocationComponent } from './modules/dashboard/location/location.component';
import { ColdestDayComponent } from './modules/dashboard/mini-widgets/coldest-day/coldest-day.component';
import { RainiestDayComponent } from './modules/dashboard/mini-widgets/rainiest-day/rainiest-day.component';
import { LatestSunriseComponent } from './modules/dashboard/mini-widgets/latest-sunrise/latest-sunrise.component';
import { MuggiestDayComponent } from './modules/dashboard/mini-widgets/muggiest-day/muggiest-day.component';
import { HottestDayComponent } from './modules/dashboard/mini-widgets/hottest-day/hottest-day.component';
import { SearchCriteriaComponent } from './modules/search/search-criteria/search-criteria.component';
import { TopResultComponent } from './modules/search/top-result/top-result.component';
import { SearchResultsComponent } from './modules/search/search-results/search-results.component';
import { ResultItemComponent } from './modules/search/search-results/result-item/result-item.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SearchComponent,
    HeaderComponent,
    SidebarComponent,
    RadarComponent,
    AverageConditionsComponent,
    LastYearComponent,
    BeachLastComponent,
    BeachClosestComponent,
    ForcastComponent,
    CurrentConditionsComponent,
    LocationComponent,
    ColdestDayComponent,
    RainiestDayComponent,
    LatestSunriseComponent,
    MuggiestDayComponent,
    HottestDayComponent,
    SearchCriteriaComponent,
    TopResultComponent,
    SearchResultsComponent,
    ResultItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
