import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NEVER, Observable, Subscription } from 'rxjs';
import { BookService } from '../book.service';
import { IBook } from '../ibook';

@Component({
  selector: 'zs-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss'],
})
export class BookListComponent implements OnInit {
  books: IBook[] = [];
  books$: Observable<IBook[]> = NEVER;
  private observer = {
    next: (data: any) => (this.books = data),
    complete: () => console.log('DONE!'),
    error: (err: any) => console.error(err),
  };

  foo() {
    return 'öskdjhsökfdjhsöfdkj';
  }

  constructor(
    private service: BookService,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  ping(e: IBook) {
    console.table(e);
    this.router.navigate([e.isbn], { relativeTo: this.route });
  }
  ngOnInit(): void {
    this.books$ = this.service.getBooks(); //.subscribe(this.observer);
  }
}
