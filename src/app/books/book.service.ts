import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, retry, catchError, of } from 'rxjs';
import { IBook } from './book.interface';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  constructor(private http: HttpClient) {}

  getBooks(): Observable<IBook[]> {
    return this.http.get<IBook[]>('http://localhost:4730/books').pipe(
      retry({ count: 2, delay: 1500 }),
      catchError((err) => of([]))
    );
  }

  getBook(isbn: string): Observable<IBook> {
    return this.http
      .get<IBook>('http://localhost:4730/books/' + isbn)
      .pipe(retry({ count: 2, delay: 1500 }));
  }
}
