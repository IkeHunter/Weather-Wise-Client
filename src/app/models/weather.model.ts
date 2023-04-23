export class Page {
  location: number;
  user: number;

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




