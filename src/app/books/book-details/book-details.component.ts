import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookService } from '../book.service';
import { IBook } from '../IBook.interface';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss'],
})
export class BookDetailsComponent implements OnInit {
  book: IBook | undefined;
  constructor(private route: ActivatedRoute, private service: BookService) {}

  ngOnInit(): void {
    console.log(this.route);
    this.route.params.subscribe((data) =>
      this.service.getBook(data['isbn']).subscribe((b) => (this.book = b))
    );

    // this.route.paramMap.subscribe((data) => {
    //   const isbn = data.get('isbn');
    //   if (isbn) {
    //     this.service.getBook(isbn).subscribe((b) => (this.book = b));
    //   }
    // });
  }
}
