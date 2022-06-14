import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pages',
})
export class PagesPipe implements PipeTransform {
  transform(value: number, args: string = ''): any {
    return `${args}: ${value}`;
  }
}
