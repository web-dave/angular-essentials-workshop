import {
  Directive,
  ElementRef,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';

@Directive({
  selector: '[orderBtn]',
})
export class OrderBtnDirective implements OnChanges {
  @Input() orderBtn: string = '';
  btn = document.createElement('button');

  constructor(elm: ElementRef) {
    elm.nativeElement.appendChild(this.btn);

    (elm.nativeElement as HTMLParagraphElement).classList.add('highlite');
  }
  ngOnChanges(): void {
    this.btn.innerText = this.orderBtn;
  }
}
