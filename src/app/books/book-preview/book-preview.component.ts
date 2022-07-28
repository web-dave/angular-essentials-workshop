import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IBook } from '../IBook.interface';

@Component({
  selector: 'app-book-preview',
  templateUrl: './book-preview.component.html',
  styleUrls: ['./book-preview.component.scss'],
})
export class BookPreviewComponent {
  showAb = false;
  @Input() book: IBook | undefined;
  @Output() bookSelected = new EventEmitter<IBook>();
  selectThisBook() {
    this.showAb = !this.showAb;
    // this.bookSelected.emit(this.book);
  }
}
