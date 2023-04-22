import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'conditionValue'
})
export class ConditionValuePipe implements PipeTransform {

  transform(value: number, symbol: string = ''): string {
    return (value || 0).toString() + symbol;
  }

}
