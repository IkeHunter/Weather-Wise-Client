import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { SearchComponent } from './modules/search/search.component';
import { HeaderComponent } from './shared/header/header.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { RadarComponent } from './modules/dashboard/radar/radar.component';
import { LastYearComponent } from './modules/dashboard/last-year/last-year.component';
import { ForcastComponent } from './modules/dashboard/forcast/forcast.component';
import { CurrentConditionsComponent } from './modules/dashboard/current-conditions/current-conditions.component';
import { LocationComponent } from './modules/dashboard/location/location.component';
import { SearchCriteriaComponent } from './modules/search/search-criteria/search-criteria.component';
import { TopResultComponent } from './modules/search/top-result/top-result.component';
import { SearchResultsComponent } from './modules/search/search-results/search-results.component';
import { ResultItemComponent } from './modules/search/search-results/result-item/result-item.component';
import { LottieModule } from "./lottie/lottie.module";
import { HourPipe } from './pipes/time.pipe';
import { DayPipe } from './pipes/time.pipe';
import { DayMonthYear } from './pipes/time.pipe';
import { DayMonth } from './pipes/time.pipe';
import { ConditionSymbolPipe } from './pipes/conditions.pipe';
import { ConditionValuePipe } from './pipes/conditions.pipe';
import { ConditionMapPipe } from './pipes/conditions.pipe';
import { ConditionRangePipe } from './pipes/conditions.pipe';
import { WeatherIconPipe } from './pipes/conditions.pipe';
import { KelvinToFahrenheit } from './pipes/conditions.pipe';
import { TimePipe } from './pipes/time.pipe';
import { ConditionsPipe } from './pipes/conditions.pipe';
import { DynamicWidgetComponent } from './modules/dashboard/dynamic-widget/dynamic-widget.component';
import { WidgetsPipe } from './pipes/widgets.pipe';
import { WidgetTitlePipe } from './pipes/widgets.pipe';

@NgModule({
    declarations: [
        AppComponent,
        DashboardComponent,
        SearchComponent,
        HeaderComponent,
        SidebarComponent,
        RadarComponent,
        LastYearComponent,
        ForcastComponent,
        CurrentConditionsComponent,
        LocationComponent,
        SearchCriteriaComponent,
        TopResultComponent,
        SearchResultsComponent,
        ResultItemComponent,
        HourPipe,
        DayPipe,
        DayMonthYear,
        DayMonth,
        WidgetTitlePipe,
        ConditionSymbolPipe,
        ConditionValuePipe,
        ConditionMapPipe,
        ConditionRangePipe,
        KelvinToFahrenheit,
        WeatherIconPipe,
        TimePipe,
        ConditionsPipe,
        DynamicWidgetComponent,
        WidgetsPipe
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        LottieModule,
        FormsModule,
        ReactiveFormsModule
    ]
})
export class AppModule { }
