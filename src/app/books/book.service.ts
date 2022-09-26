import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, retry, catchError, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  constructor(private http: HttpClient) {}

  getBooks(): Observable<any> {
    return this.http.get<any>('http://localhost:4730/books').pipe(
      retry({ count: 2, delay: 1500 }),
      catchError((err) => of([]))
    );
  }
}
