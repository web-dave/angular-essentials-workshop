import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BooksRoutingModule } from './books-routing.module';
import { BooksComponent } from './books.component';
import { BookListComponent } from './book-list/book-list.component';
import { BookPreviewComponent } from './book-preview/book-preview.component';

@NgModule({
  declarations: [BooksComponent, BookListComponent, BookPreviewComponent],
  exports: [BooksComponent],
  imports: [CommonModule, BooksRoutingModule],
})
export class BooksModule {}
