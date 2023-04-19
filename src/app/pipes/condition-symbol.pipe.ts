import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'conditionSymbol'
})
export class ConditionSymbolPipe implements PipeTransform {

  transform(value: string): string {
    if(value === "temp") {
      return "°";
    } else if(value === "pop" || value === "humidity") {
      return "%";
    } else if(value === "wind") {
      return "mph";
    }else {
      return "";
    }
  }

}
