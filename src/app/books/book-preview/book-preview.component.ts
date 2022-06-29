import { Component, EventEmitter, Input, Output } from '@angular/core';
import { emptyBook, IBook } from '../ibook';

export type robert = number | undefined;

@Component({
  selector: 'zs-book-preview,tr[zs-book-preview]',
  templateUrl: './book-preview.component.html',
  styleUrls: ['./book-preview.component.scss'],
})
export class BookPreviewComponent {
  @Input() book: IBook = emptyBook;
  @Output() bookChanges = new EventEmitter<IBook>();

  ping() {
    this.bookChanges.emit(this.book);
  }
}
