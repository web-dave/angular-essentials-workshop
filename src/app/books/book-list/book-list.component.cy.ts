import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MountResponse } from 'cypress/angular';
import { of } from 'rxjs';
import { BookPreviewComponent } from '../book-preview/book-preview.component';
import { BookService } from '../book.service';
import { IBook } from '../i-book';
import { BookListComponent } from './book-list.component';

describe('book-preview', () => {
  const books: IBook[] = [
    {
      id: '',
      title: 'Hallo Tobi',
      subtitle: '',
      isbn: '132-1-654-65196-1',
      abstract: '',
      author: '',
      publisher: '',
      price: '',
      numPages: 5,
      cover: '',
      userId: 1,
    },
    {
      id: '',
      title: 'Hallo Pischa',
      subtitle: '',
      isbn: '132-1-654-65196-2',
      abstract: '',
      author: '',
      publisher: '',
      price: '',
      numPages: 5,
      cover: '',
      userId: 1,
    },
    {
      id: '',
      title: 'Hallo Dave',
      subtitle: '',
      isbn: '132-1-654-65196-3',
      abstract: '',
      author: '',
      publisher: '',
      price: '',
      numPages: 5,
      cover: '',
      userId: 1,
    },
    {
      id: '',
      title: 'Hello Jordan',
      subtitle: 'Thank you for Angular Component Testing',
      isbn: '132-1-654-65196-100',
      abstract: 'Jordan is our Hero!',
      author: '',
      publisher: '',
      price: '',
      numPages: 5,
      cover: '',
      userId: 1,
    },
  ];

  it('should show book-list', () => {
    cy.potato(BookListComponent, {
      declarations: [BookPreviewComponent],
      providers: [
        { provide: BookService, useValue: { getBooks: () => of(books) } },
      ],
    }).then((ct: MountResponse<BookListComponent>) => {
      cy.get('app-book-preview').should('have.length', books.length);
      cy.spy(ct.component.router, 'navigate').as('routenavigate');

      cy.get('button').each((b, i) => {
        cy.wrap(b).click();
        cy.get('@routenavigate').should(
          'have.been.calledWith',
          [books[i].isbn],
          {
            relativeTo: {},
          }
        );
      });
      cy.screenshot();
    });
  });
});
