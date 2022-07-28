import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book-new',
  templateUrl: './book-new.component.html',
  styleUrls: ['./book-new.component.scss'],
})
export class BookNewComponent implements OnInit {
  bookForm: FormGroup = new FormGroup({});
  formFields = [
    'title',
    'subtitle',
    'isbn',
    'abstract',
    'numPages',
    'author',
    'publisher',
    'price',
    'cover',
  ];
  constructor(private builder: FormBuilder, private service: BookService) {}

  ngOnInit(): void {
    this.bookForm = this.builder.group({
      title: ['', [Validators.required]],
      subtitle: ['', []],
      isbn: ['', []],
      abstract: ['', []],
      numPages: [0, []],
      author: ['', []],
      publisher: ['', []],
      price: ['', []],
      cover: ['', []],
      id: [0, []],
    });
    this.bookForm.controls['title'].statusChanges.subscribe((value: string) => {
      console.log(value);
    });
    this.bookForm.controls['subtitle'].valueChanges.subscribe(
      (value: string) => {
        if (value.length >= 3) {
          this.bookForm.controls['price'].setValue('7,99');
        } else {
          this.bookForm.controls['price'].setValue('');
        }
      }
    );
  }

  saveBook() {
    this.service.createBook(this.bookForm.value).subscribe();
  }
}
