import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BookService } from '../book.service';
import { IBook } from '../i-book';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss'],
})
export class BookListComponent implements OnInit {
  books: IBook[] = [];
  constructor(
    private bookService: BookService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.bookService.getBooks().subscribe((books) => (this.books = books));
  }
  selectBook(book: IBook) {
    this.router.navigate([book.isbn], { relativeTo: this.route });
  }
}
