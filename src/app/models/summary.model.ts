import { Page } from "./weather.model";

export class Summary extends Page {
  current_conditions: Condition;
  last_year: Condition;
  forecast: Forecast;

  constructor(args: { current_conditions: any, last_year: Condition, forecast: Forecast, location: number, user: number }) {
    // super(location, user);
    super();
    this.location = args.location;
    this.user = args.user;
    this.current_conditions = args.current_conditions;
    this.last_year = args.last_year;
    console.log("forecast raw: ")
    console.log(args.forecast)
    this.forecast = args.forecast;

    this.forecast = new Forecast(args.forecast);
    console.log("args: ")
    console.log(args)
    console.log(args.current_conditions)
  }
}

export interface Condition {
  widget_title: string;
  average_temp: number;
  feels_like: number;
  pressure: number;
  humidity: number;
  wind_peed: number;
  pop: number;
  rain_level: number;
  weather_name: string;
  icon: string;
  date: number;
}
export class Forecast {
  date: number;
  sunrise: number;
  sunset: number;
  wind_speed: number;
  wind_deg: number;
  // table: ForecastTable[];
  temperature: ForecastTable = new ForecastTable();
  precipitation: ForecastTable = new ForecastTable();
  humidity: ForecastTable = new ForecastTable();
  wind: ForecastTable = new ForecastTable();
  table: any;

  constructor(args: {date: number, sunrise: number, sunset: number, wind_speed: number, wind_deg: number, table: Array<any>}) {
    this.date = args.date;
    this.sunrise = args.sunrise;
    this.sunset = args.sunset;
    this.wind_speed = args.wind_speed;
    this.wind_deg = args.wind_deg;

    for(let table of args.table) {
      console.log("table: ")
      console.log(table)

      var type: any;
      if(table.type === "Temperature Forecast") {
        type = this.temperature;
      } else if(table.type === "Precipitation Forecast") {
        type = this.precipitation;
      } else if(table.type === "Humidity Forecast") {
        type = this.humidity;
      } else if(table.type === "Wind Forecast") {
        type = this.wind;
      }

      var range: any;
      if(table.range === "h") {
        range = type.hour;
      } else if(table.range === "d") {
        range = type.day;
      } else {
        range = {};
      }

      for(let interval of table.values) {
        range.set(interval.time, interval.value as number);
      }

    }
  }



}
export class ForecastTable {
  hour: Map<String, number>;
  day: Map<String, number>;

  constructor() {
    this.hour = new Map<String, number>();
    this.day = new Map<String, number>();
  }
}



