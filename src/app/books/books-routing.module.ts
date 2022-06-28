import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookListComponent } from './book-list/book-list.component';
import { BooksComponent } from './books.component';

const routes: Routes = [
  {
    path: '',
    component: BooksComponent,
    children: [
      {
        path: '',
        component: BookListComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BooksRoutingModule {}
