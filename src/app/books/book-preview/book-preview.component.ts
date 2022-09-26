import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-book-preview',
  templateUrl: './book-preview.component.html',
  styleUrls: ['./book-preview.component.scss'],
})
export class BookPreviewComponent implements OnInit {
  @Input() book: any;
  @Output() bookSelected = new EventEmitter<any>();
  constructor() {}

  ngOnInit(): void {}

  selectThisBook() {
    this.bookSelected.emit(this.book);
  }
}
