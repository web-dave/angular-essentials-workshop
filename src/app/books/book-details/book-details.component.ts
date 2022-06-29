import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookService } from '../book.service';
import { emptyBook, IBook } from '../ibook';

@Component({
  selector: 'zs-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss'],
})
export class BookDetailsComponent implements OnInit {
  book: IBook = emptyBook;
  constructor(private route: ActivatedRoute, private service: BookService) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) =>
      this.service
        .getBook(params['isbn'])
        .subscribe((data) => (this.book = data))
    );
  }
}
