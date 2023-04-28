import { Component, CUSTOM_ELEMENTS_SCHEMA, Input, NgModule, OnChanges, OnInit } from '@angular/core';
import { LottieModule } from 'src/app/lottie/lottie.module';
import { forecastSeed } from './forecast.data';
import { ApiSummary } from 'src/app/services/api.service';
import { Forecast, Summary } from 'src/app/models/summary.model';
import { KelvinToFahrenheit } from 'src/app/pipes/conditions.pipe';

@Component({
  selector: 'app-forcast',
  templateUrl: './forcast.component.html',
  styleUrls: ['./forcast.component.scss'],
  providers: [LottieModule]
})

export class ForcastComponent implements OnInit, OnChanges{
  @Input() summary: Summary;
  forecast: Forecast;
  kToF = new KelvinToFahrenheit().transform;

  barWidth: number = 70;
  sunAnimation: any;
  compassAnimation: any;
  sunPosition: number = 0;
  compassPosition: number = 0;

  sunrise: number = 0;
  sunset: number = 0;
  sunriseRaw: number = 0;
  sunsetRaw: number = 0;
  showSunRise: boolean = true;
  wind_speed: number = 0;

  currentType: any = forecastSeed.temperature;
  conditionType = "temp";
  forecastIntervalData = new Map<string, number>(Object.entries(this.currentType.hour));
  timeRange = "hour";

  barWidths: Map<string, number> = new Map([
    ["temp", 70],
    ["pop", 70],
    ["humidity", 70],
    ["wind", 70]
  ]);

  constructor(private apiService: ApiSummary) {}

  ngOnChanges() {
    if(this.summary != undefined) {
      console.log("summary: ")
      console.log(this.summary)
      this.forecast = this.summary.forecast;
      console.log("forecast: ")
      console.log(this.forecast)
      this.resetRange();
      this.setBarWidths();
      // this.compassAnimation.pause();
      // this.sunAnimation.addEventListener("ready", () => {
      //   this.sunAnimation.seek(`${this.sunPosition}%`);
      //   this.sunAnimation.pause()
      // });
      // this.compassAnimation.addEventListener("ready", () => {
      //   this.compassAnimation.seek(`${this.compassPosition}%`);
      //   this.compassAnimation.pause();
      // })
      this.setSunPosition();
      this.setCompassPosition();
    }
  }

  ngOnInit() {
    this.sunAnimation = document.getElementById("sunanimation");
    this.compassAnimation = document.getElementById("compassanimation");

    this.sunAnimation.addEventListener("ready", () => {
      this.setSunPosition();
    });
    this.compassAnimation.addEventListener("ready", () => {
      this.setCompassPosition();
    })

  }

  resetRange() {
    if(this.conditionType === "temp") {
      this.currentType = this.forecast.temperature;
    } else if(this.conditionType === "pop") {
      this.currentType = this.forecast.precipitation;
    } else if(this.conditionType === "humidity") {
      this.currentType = this.forecast.humidity;
    } else if(this.conditionType === "wind") {
      this.currentType = this.forecast.wind;
    }
    console.log("inside reset range")
    console.log(this.currentType)
    console.log(this.forecast)
    if(this.timeRange === "hour") {
      this.forecastIntervalData = this.currentType.hour;
    } else {
      this.forecastIntervalData = this.currentType.day;
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

  convertWidth(value: number): number {
    let width = (value / (this.barWidths.get(this.conditionType) || 100)) * 100;
    return width;
  }

  setBarWidths() {
    let temp: number = 0;
    let pop: number = 0;
    let humidity: number = 0;
    let wind: number = 0;
    console.log("inside bar widths")
    console.log(this.forecast)

    this.forecast.temperature.hour.forEach((value, index) => {
      this.forecast.temperature.hour.set(index, this.kToF(value));
    });
    this.forecast.temperature.day.forEach((value, index) => {
      this.forecast.temperature.day.set(index, this.kToF(value));
    });

    this.forecast.precipitation.hour.forEach((value, index) => {
      this.forecast.precipitation.hour.set(index, value * 100);
    });


    for(let [i, value] of this.forecast.temperature.hour) {
      if(value > temp) {
        temp = value;
      }
    }
    for(let [i, value] of this.forecast.temperature.day) {
      if(value > temp) {
        temp = value;
      }
    }
    for(let [_, value] of this.forecast.precipitation.hour) {
      if(value > pop) {
        pop = value;
      }
    }
    for(let [_, value] of this.forecast.precipitation.day) {
      if(value > pop) {
        pop = value;
      }
    }
    for(let [_, value] of this.forecast.humidity.hour) {
      if(value > humidity) {
        humidity = value;
      }
    }
    for(let [_, value] of this.forecast.humidity.day) {
      if(value > humidity) {
        humidity = value;
      }
    }

    for(let [_, value] of this.forecast.wind.hour) {
      if(value > wind) {
        wind = value;
      }
    }
    for(let [_, value] of this.forecast.wind.day) {
      if(value > wind) {
        wind = value;
      }
    }

    temp += temp*.1;
    pop += pop*.1;
    humidity += humidity*.1;
    wind += wind*.1;

    this.barWidths.set("temp", temp);
    this.barWidths.set("pop", pop);
    this.barWidths.set("humidity", humidity);
    this.barWidths.set("wind", wind);

  }

  setSunPosition() {
    let currentTime: number = new Date().getHours();
    this.sunrise = new Date(this.forecast.sunrise * 1000).getHours();
    this.sunset = new Date(this.forecast.sunset * 1000).getHours();
    this.sunriseRaw = this.forecast.sunrise;
    this.sunsetRaw = this.forecast.sunset;

    console.log("current time: " + currentTime)
    console.log("sunrise: " + this.sunrise)
    console.log("sunset: " + this.sunset)
    if(currentTime > this.sunrise && currentTime < this.sunset) {
      let timeDiff = this.sunset - this.sunrise;
      let timeDiffCurrent = currentTime - this.sunrise;
      let sunPosition = (timeDiffCurrent / timeDiff) * 100;
      this.sunPosition = sunPosition;

      this.showSunRise = false;
    } else if(currentTime > this.sunset) {
      this.sunPosition = 100;
      this.showSunRise = true;

    } else if(currentTime < this.sunrise) {
      this.sunPosition = 0;
      this.showSunRise = true;
    } else {
      this.sunPosition = 50;
    }

    console.log("sun position: " + this.sunPosition)
    this.sunAnimation.seek(`${Math.ceil(this.sunPosition)}%`);
    this.sunAnimation.pause()
  }

  setCompassPosition() {
    let windDirection = this.forecast.wind_deg;
    let compassPosition = (windDirection / 360) * 100;
    this.wind_speed = this.forecast.wind_speed;

    this.compassPosition = compassPosition;
    console.log("compass position: " + compassPosition)

    this.compassAnimation.seek(`${100-Math.ceil(this.compassPosition)}%`);
    this.compassAnimation.pause()
  }

  getWindDirection(): string {
    let windDirection = this.forecast.wind_deg;

    if(windDirection >348.75 || windDirection <= 11.25) {
      // N
      return "N";
    } else if(windDirection > 11.25 && windDirection <= 33.75) {
      // NNE
      return "NNE";
    } else if(windDirection > 33.75 && windDirection <= 56.25) {
      // NE
      return "NE";
    } else if(windDirection > 56.25 && windDirection <= 78.75) {
      // ENE
      return "ENE";
    } else if(windDirection > 78.75 && windDirection <= 101.25) {
      // E
      return "E";
    } else if(windDirection > 101.25 && windDirection <= 123.75) {
      // ESE
      return "ESE";
    } else if(windDirection > 123.75 && windDirection <= 146.25) {
      // SE
      return "SE";
    } else if(windDirection > 146.25 && windDirection <= 168.75) {
      // SSE
      return "SSE";
    } else if(windDirection > 168.75 && windDirection <= 191.25) {
      // S
      return "S";
    } else if(windDirection > 191.25 && windDirection <= 213.75) {
      // SSW
      return "SSW";
    } else if(windDirection > 213.75 && windDirection <= 236.25) {
      // SW
      return "SW";
    } else if(windDirection > 236.25 && windDirection <= 258.75) {
      // WSW
      return "WSW";
    } else if(windDirection > 258.75 && windDirection <= 281.25) {
      // W
      return "W";
    } else if(windDirection > 281.25 && windDirection <= 303.75) {
      // WNW
      return "WNW";
    } else if(windDirection > 303.75 && windDirection <= 326.25) {
      // NW
      return "NW";
    } else if(windDirection > 326.25 && windDirection <= 348.75) {
      // NNW
      return "NNW";
    } else {
      // N
      return "N";
    }
  }
}


