import { Page } from "./weather.model";

export class Summary extends Page {
  current_conditions: Condition;
  last_year: Condition;
  forecast: Forecast;
  widgets: Condition[];

  constructor(args: { current_conditions: any, last_year: Condition, forecast: Forecast, widgets: Condition[], location: number, user: number }) {
    // super(location, user);
    super();
    this.location = args.location;
    this.user = args.user;
    this.current_conditions = args.current_conditions;
    this.last_year = args.last_year;
    this.forecast = args.forecast;
    this.widgets = args.widgets;

    this.forecast = new Forecast(args.forecast);
  }
}

// export class Condition {
//   widget_title: string;
//   average_temp: number;
//   feels_like: number;
//   pressure: number;
//   humidity: number;
//   wind_peed: number;
//   pop: number;
//   rain_level: number;
//   weather_name: string;
//   icon: string;
//   date: number;

//   constructor(args: {widget_title: string, average_temp: number, feels_like: number, pressure: number, humidity: number, wind_peed: number, pop: number, rain_level: number, weather_name: string, icon: string, date: number}) {
//     this.widget_title = args.widget_title;
//     this.average_temp = args.average_temp;
//     this.feels_like = args.feels_like;
//     this.pressure = args.pressure;
//     this.humidity = args.humidity;
//     this.wind_peed = args.wind_peed;
//     this.pop = args.pop;
//     this.rain_level = args.rain_level;
//     this.weather_name = args.weather_name;
//     this.icon = args.icon;
//     this.date = args.date;
//   }
// }
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



