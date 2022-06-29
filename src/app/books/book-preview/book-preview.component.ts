import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'zs-book-preview,tr[zs-book-preview]',
  templateUrl: './book-preview.component.html',
  styleUrls: ['./book-preview.component.scss'],
})
export class BookPreviewComponent {
  @Input() book: any;
  @Output() bookChanges = new EventEmitter();

  ping() {
    this.bookChanges.emit(this.book);
  }
}
