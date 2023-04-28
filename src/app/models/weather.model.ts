export class Page {
  location: number;
  user: number;
  city: string;

}

export class SearchCriteria {
  startDate: string
  endDate: string
  temperature: number
  precipitation: number
  humidity: number

  constructor(args: { startDate: string, endDate: string, temperature: number, precipitation: number, humidity: number }) {
    this.startDate = args.startDate;
    this.endDate= args.endDate;
    this.temperature = args.temperature;
    this.precipitation = args.precipitation;
    this.humidity = args.humidity;
  }
}

export interface LocationChangeResponse {
  success: boolean;
  latitude: number;
  longitude: number;
}

export interface Coords {
  lat: number;
  lon: number;
  postal: number;
}



