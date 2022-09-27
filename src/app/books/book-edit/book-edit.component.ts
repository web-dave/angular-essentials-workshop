import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { IBook } from '../book.interface';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.scss'],
})
export class BookEditComponent implements OnInit {
  book$: Observable<IBook> = this.route.params.pipe(
    switchMap((data) => this.service.getBook(data['isbn']))
  );
  constructor(private route: ActivatedRoute, private service: BookService) {}

  ngOnInit(): void {}

  saveBook(b: IBook) {
    console.log(b);
  }
}
