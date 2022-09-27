import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pages',
  pure: true,
})
export class PagesPipe implements PipeTransform {
  transform(value: number = 0, text: string = 'Seitenzahl'): string {
    console.log('pipe', value);
    return `${text}: ${value}`;
  }
}
