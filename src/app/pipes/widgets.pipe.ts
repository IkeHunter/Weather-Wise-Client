import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'widgets'
})
export class WidgetsPipe implements PipeTransform {
  // Unused
  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}

@Pipe({
  name: 'widgetTitle'
})
export class WidgetTitlePipe implements PipeTransform {
  /**
   * Converts api widget title to display title
   * @param value string, widget title
   * @returns string, widget title. Ex: Hottest Day
   */
  transform(value: string): string {
    let title = value.split('_')
    title.forEach((word, index) => {
      word = word.charAt(0).toUpperCase() + word.slice(1);
      title[index] = word;
    });
    return title.join(' ');
  }

}

