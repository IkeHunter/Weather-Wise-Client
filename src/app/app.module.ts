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
    CurrentConditionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
