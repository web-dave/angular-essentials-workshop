import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-book-preview',
  templateUrl: './book-preview.component.html',
  styleUrls: ['./book-preview.component.scss'],
})
export class BookPreviewComponent {
  @Input() book: any;
  @Output() bookSelected = new EventEmitter<any>();
  selectThisBook() {
    this.bookSelected.emit(this.book);
  }
}
