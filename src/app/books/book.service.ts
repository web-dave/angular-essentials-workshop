import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  private root = 'http://localhost:4730/books';
  constructor(private http: HttpClient) {}
  getBooks(): Observable<any> {
    return this.http.get(this.root);
  }
}
