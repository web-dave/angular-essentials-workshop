import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { IBook } from '../ibook';

@Component({
  selector: 'zs-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss'],
})
export class BookListComponent implements OnInit {
  books: IBook[] = [];
  private observer = {
    next: (data: any) => (this.books = data),
    complete: () => console.log('DONE!'),
    error: (err: any) => console.error(err),
  };
  constructor(private service: BookService) {}
  ping(e: object) {
    console.table(e);
  }
  ngOnInit(): void {
    this.service.getBooks().subscribe(this.observer);
  }
}
