import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NonNullableFormBuilder } from '@angular/forms';
import { BookService } from '../book.service';
import { IBook, IForm } from '../i-book';

@Component({
  selector: 'app-book-new',
  templateUrl: './book-new.component.html',
  styleUrls: ['./book-new.component.scss'],
})
export class BookNewComponent implements OnInit {
  form!: FormGroup<IForm<IBook>>;
  book!: Partial<IBook>;
  constructor(private fb: FormBuilder, private bookService: BookService) {}

  ngOnInit(): void {
    this.form = this.fb.nonNullable.group({
      title: ['', []],
      isbn: ['', []],
      id: ['', []],
      subtitle: ['', []],
      abstract: ['', []],
      author: ['', []],
      publisher: ['', []],
      price: ['', []],
      numPages: [0, []],
      cover: ['', []],
      userId: [0, []],
    });
    this.book = this.form.value;
  }
  saveBook() {
    this.bookService.createBook(this.form.getRawValue()).subscribe();
  }
}
