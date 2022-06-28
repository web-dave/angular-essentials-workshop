import { Component } from '@angular/core';

@Component({
  selector: 'zs-root',
  templateUrl: './app.component.html',
  // template: `
  //   <input [value]="title" (input)="updateT($event)" />
  //   <button (click)="baz($event)">{{ i }}</button>
  // `,
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  s = true;
  title = 'angular-essential-workshop 🦄!!!!';
  edit = true;
  i = 0;
  baz(evt?: MouseEvent) {
    this.i++;
    this.title = this.edit + '' + this.i;
  }

  updateT(evt: Event) {
    this.title = (evt.target as HTMLInputElement).value;
    console.log(evt);
  }
  constructor() {
    // setInterval(() => {
    //   this.baz();
    // }, 1500);
  }
}

const foo: any = {
  bar: 1,
  event: (evt: any) => {},
};
foo['bar'] = 4711;
foo.event('click');
