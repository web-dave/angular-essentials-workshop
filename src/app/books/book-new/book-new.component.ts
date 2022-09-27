import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  NonNullableFormBuilder,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { IBook } from '../book.interface';

export type IForm<T> = {
  [K in keyof T]: FormControl<T[K]>;
};

@Component({
  selector: 'app-book-new',
  templateUrl: './book-new.component.html',
  styleUrls: ['./book-new.component.scss'],
})
export class BookNewComponent implements OnInit {
  bookForm: FormGroup<IForm<IBook>> = this.builder.group({
    abstract: [''],
    title: ['', [kunValidator]],
    subtitle: [''],
    isbn: ['', [Validators.required]],
    numPages: [0],
    author: [''],
    publisher: [''],
    price: [''],
    cover: [''],
  });

  config: { [key: string]: string } = {
    abstract: 'text',
    title: 'text',
    subtitle: 'text',
    isbn: 'text',
    numPages: 'number',
    author: 'text',
    publisher: 'text',
    price: 'text',
    cover: 'text',
  };

  keys = Object.keys(this.bookForm.controls);

  book: IBook | undefined;

  constructor(private builder: NonNullableFormBuilder) {}

  ngOnInit(): void {
    this.book = this.bookForm.getRawValue();

    this.book.abstract;
  }

  addFoo() {
    this.bookForm.addControl('foo', this.builder.control(''));
    this.config['foo'] = 'text';
    this.keys = Object.keys(this.bookForm.controls);
  }
}

const kunValidator: ValidatorFn = (
  control: AbstractControl<string>
): ValidationErrors | null => {
  if (control.value.includes('kun')) {
    return null;
  } else {
    return {
      kun: 'KUN nicht gefunden!',
    };
  }
};
