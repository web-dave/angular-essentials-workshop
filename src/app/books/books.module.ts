import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BooksRoutingModule } from './books-routing.module';
import { BooksComponent } from './books.component';
import { BookListComponent } from './book-list/book-list.component';
import { BookPreviewComponent } from './book-preview/book-preview.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { BookNewComponent } from './book-new/book-new.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    BooksComponent,
    BookListComponent,
    BookPreviewComponent,
    BookDetailsComponent,
    BookNewComponent,
  ],
  exports: [BooksComponent],
  imports: [CommonModule, BooksRoutingModule, ReactiveFormsModule],
})
export class BooksModule {}
