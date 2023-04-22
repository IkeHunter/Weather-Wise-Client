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
    this.forecast = args.forecast;
    console.log("args: ")
    console.log(args)
    console.log(args.current_conditions)
  }

  // forecast: {
  //   date: BigInt;
  //   sunrise: BigInt;
  //   sunset: BigInt;
  //   windSpeed: number;
  //   windDeg: number;
  //   table: [
  //     {
  //       type: string;
  //       range: string;
  //     }
  //   ]
  // }
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
}
export interface Forecast {
  date: BigInt;
  sunrise: BigInt;
  sunset: BigInt;
  wind_speed: number;
  wind_deg: number;
  // table: [ForecastTable];
  table: ForecastTable[];
}
export interface ForecastTable {
  type: string;
  range: string;
  // values: [ForecastRow];
  values: ForecastRow[];
}
export interface ForecastRow {
  value: number;
  time: BigInt;
}


