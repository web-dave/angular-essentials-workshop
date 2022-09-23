import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular-essential-workshop';
  foo = 1;
  constructor() {
    setTimeout(() => (this.title = 'södjfkhsaöfh'), 1500);
    setInterval(() => {
      this.foo = 2;
    }, 1500);
  }

  pipeIt(value: number): string {
    console.log('pipeIt');
    return value + '!';
  }
}
