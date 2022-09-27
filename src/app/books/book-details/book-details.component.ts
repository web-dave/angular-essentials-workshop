import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { IBook } from '../book.interface';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss'],
})
export class BookDetailsComponent implements OnInit {
  // book: IBook | undefined;

  n = 277;
  book$: Observable<IBook> = this.route.params.pipe(
    switchMap((data) => this.service.getBook(data['isbn']))
  );
  transform(value: number = 0, text: string = 'Seitenzahl'): string {
    console.log('methode', value);
    return `${text}: ${value}`;
  }

  // sub!: Subscription;
  constructor(private route: ActivatedRoute, private service: BookService) {}

  ngOnInit(): void {
    const isbn = this.route.snapshot.params['isbn'];

    setInterval(() => (this.n = 300), 1500);

    // this.sub = this.service.getBook(isbn).subscribe({
    //   next: (data) => (this.book = data),
    // });

    // this.route.params.subscribe((data) => {
    //   this.sub = this.service.getBook(data['isbn']).subscribe({
    //     next: (data) => (this.book = data),
    //   });
    // });

    // this.sub = this.route.params
    //   .pipe(switchMap((data) => this.service.getBook(data['isbn'])))
    //   .subscribe((data) => (this.book = data));
  }
  // ngOnDestroy(): void {
  //   this.sub.unsubscribe();
  // }
}
