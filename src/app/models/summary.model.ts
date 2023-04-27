import { Page } from "./weather.model";

export class Summary extends Page {
  current_conditions: Condition;
  last_year: Condition;
  forecast: Forecast;
  widgets: Condition[];

  constructor(args: { current_conditions: any, last_year: Condition, forecast: Forecast, widgets: Condition[], location: number, user: number }) {
    // super(location, user);
    super();
    console.log("inside summary constructor")
    console.log(args)
    this.location = args.location;
    this.user = args.user;
    this.current_conditions = new Condition(args.current_conditions);
    this.last_year = new Condition(args.last_year);
    this.forecast = new Forecast(args.forecast);
    // this.widgets = args.widgets;

    this.widgets = [];
    for(let widget of args.widgets) {
      this.widgets.push(new Condition(widget));
    }

    this.forecast = new Forecast(args.forecast);
    console.log(this)
  }
}

export class Condition {
  widget_title: string;
  average_temp: number;
  feels_like: number;
  pressure: number;
  humidity: number;
  wind_speed: number;
  pop: number;
  rain_level: number;
  weather_name: string;
  icon: string;
  date: number;
  // wind_speed: number;

  constructor(args: {widget_title: string, average_temp: number, feels_like: number, pressure: number, humidity: number, wind_speed: number, pop: number, rain_level: number, weather_name: string, icon: string, date: number}) {
    this.widget_title = args.widget_title || "";
    this.average_temp = args.average_temp || 0;
    this.feels_like = args.feels_like || 0;
    this.pressure = args.pressure || 0;
    this.humidity = args.humidity || 0;
    this.wind_speed = args.wind_speed || 0;
    this.pop = args.pop || 0;
    this.rain_level = args.rain_level || 0;
    this.weather_name = args.weather_name || "";
    this.icon = args.icon || "";
    this.date = args.date || 0;
    // this.wind_speed = args.wind_speed || 0;
  }
}
// export interface Condition {
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
// }
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
    this.date = args.date || 0;
    this.sunrise = args.sunrise || 0;
    this.sunset = args.sunset  || 0;
    this.wind_speed = args.wind_speed || 0;
    this.wind_deg = args.wind_deg || 0;

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



