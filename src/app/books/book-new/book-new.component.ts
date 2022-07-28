import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book-new',
  templateUrl: './book-new.component.html',
  styleUrls: ['./book-new.component.scss'],
})
export class BookNewComponent implements OnInit {
  bookForm: FormGroup = new FormGroup({});
  constructor(private builder: FormBuilder, private service: BookService) {}

  ngOnInit(): void {
    this.bookForm = this.builder.group({
      title: ['', []],
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
  }

  saveBook() {
    this.service.createBook(this.bookForm.value).subscribe();
  }
}
