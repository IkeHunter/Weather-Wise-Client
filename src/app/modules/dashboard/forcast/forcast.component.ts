import { Component, CUSTOM_ELEMENTS_SCHEMA, NgModule, OnInit } from '@angular/core';
import { LottieModule } from 'src/app/lottie/lottie.module';
import { forecastData } from './forecast.data';

@Component({
  selector: 'app-forcast',
  templateUrl: './forcast.component.html',
  styleUrls: ['./forcast.component.scss'],
  providers: [LottieModule]
})

export class ForcastComponent implements OnInit{
  barWidth: number = 70;

  sunAnimation: any;
  compassAnimation: any;

  sunPosition: number = 50;
  compassPosition: number = 75;

  currentType = forecastData.temperature;
  conditionType = "temp";

  forecastIntervalData = new Map(Object.entries(this.currentType.hour));
  timeRange = "hour";


  constructor() {

  }

  ngOnInit() {
    this.sunAnimation = document.getElementById("sunanimation");
    this.compassAnimation = document.getElementById("compassanimation");

    this.sunAnimation.addEventListener("ready", () => {
      this.sunAnimation.seek(`${this.sunPosition}%`);
      this.sunAnimation.pause()
    });
    this.compassAnimation.addEventListener("ready", () => {
      this.compassAnimation.seek(`${this.compassPosition}%`);
      this.compassAnimation.pause();
    })

  }

  resetRange() {
    if(this.conditionType === "temp") {
      this.currentType = forecastData.temperature;
    } else if(this.conditionType === "pop") {
      this.currentType = forecastData.precipitation;
    } else if(this.conditionType === "humidity") {
      this.currentType = forecastData.humidity;
    } else if(this.conditionType === "wind") {
      this.currentType = forecastData.wind;
    }
    if(this.timeRange === "hour") {
      this.forecastIntervalData = new Map(Object.entries(this.currentType.hour));
    } else {
      this.forecastIntervalData = new Map(Object.entries(this.currentType.day));
    }
  }

  changeRange(type: string) {
    if(type === "hour") {
      this.timeRange = "hour";
    } else if(type === "day") {
      this.timeRange = "day";
    }
    this.resetRange();
  }
  changeType(type: string) {
    if(type === "temp") {
      this.conditionType = "temp";
    } else if(type === "pop") {
      this.conditionType = "pop";
    } else if(type === "humidity") {
      this.conditionType = "humidity";
    } else if(type === "wind") {
      this.conditionType = "wind";
    } else {
      this.conditionType = "temp";
    }
    this.resetRange();
  }
}


