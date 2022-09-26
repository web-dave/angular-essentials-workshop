import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss'],
})
export class BookListComponent implements OnInit {
  books: any;
  constructor(private service: BookService) {}

  ngOnInit(): void {
    this.service.getBooks().subscribe({
      next: (data) => (this.books = data),
    });
  }

  goToBook(b: any) {
    console.log(b);
  }
}
