import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IBook } from '../book.interface';

@Component({
  selector: 'app-book-preview',
  templateUrl: './book-preview.component.html',
  styleUrls: ['./book-preview.component.scss'],
})
export class BookPreviewComponent implements OnInit {
  @Input() book: IBook | undefined;
  @Output() bookSelected = new EventEmitter<IBook>();
  constructor() {}

  ngOnInit(): void {}

  selectThisBook() {
    this.bookSelected.emit(this.book);
  }
}
