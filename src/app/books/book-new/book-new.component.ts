import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  NonNullableFormBuilder,
  Validators,
} from '@angular/forms';
import { TitleStrategy } from '@angular/router';
import { BookService } from '../book.service';
import { IBook } from '../ibook';

export type IForm<T> = {
  [K in keyof T]: FormControl<T[K]>;
};

@Component({
  selector: 'zs-book-new',
  templateUrl: './book-new.component.html',
  styleUrls: ['./book-new.component.scss'],
})
export class BookNewComponent {
  bookForm: FormGroup<IForm<IBook>>;
  constructor(
    private fb: NonNullableFormBuilder,
    private service: BookService
  ) {
    setInterval(() => console.log(this.bookForm.value), 1500);
    this.bookForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(6)]],
      isbn: ['', [Validators.required, Validators.minLength(6)]],
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
  }
  saveBook() {
    this.service.saveBook(this.bookForm.value).subscribe();
  }
}
