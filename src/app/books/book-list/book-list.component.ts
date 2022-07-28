import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from '../book.service';
import { IBook } from '../IBook.interface';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss'],
})
export class BookListComponent implements OnInit {
  books: IBook[] = [];
  constructor(
    private service: BookService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.service.getBooks().subscribe({
      next: (data) => (this.books = data),
      complete: () => console.log('DONE'),
    });
  }
  showBook(b: IBook) {
    this.router.navigate([b.isbn], { relativeTo: this.route });
  }
}
