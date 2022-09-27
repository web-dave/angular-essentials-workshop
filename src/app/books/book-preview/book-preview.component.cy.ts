import { createOutputSpy } from 'cypress/angular';
import { RouterTestingModule } from '@angular/router/testing';
import { BookPreviewComponent } from './book-preview.component';
import { IBook } from './../i-book';
import { BookService } from '../book.service';
describe('book-preview', () => {
  const book: IBook = {
    id: '',
    title: 'Hallo Tobi',
    subtitle: '',
    isbn: '132-1-654-65196-4',
    abstract: '',
    author: '',
    publisher: '',
    price: '',
    numPages: 5,
    cover: '',
    userId: 1,
  };

  it('should show nothing', () => {
    cy.mount(BookPreviewComponent);
    cy.get('ul').should('not.exist');
  });

  it('should mount via template', () => {
    cy.mount('<app-book-preview></app-book-preview>', {
      declarations: [BookPreviewComponent],
    });
    cy.get('ul').should('not.exist');
  });

  it('should show Book Title and ISBN', () => {
    cy.mount(BookPreviewComponent, { componentProperties: { book: book } });
    cy.get('ul').should('exist');
    cy.get('li').first().should('contain', 'Hallo Tobi');
    cy.get('li').eq(1).should('contain', '132-1-654-65196-4');
  });

  it('should emit book on Button click', () => {
    cy.mount(
      '<app-book-preview [book]="book" (bookselected)="bookselected.emit($event)"></app-book-preview>',
      {
        declarations: [BookPreviewComponent],
        componentProperties: {
          book: book,

          bookselected: createOutputSpy<IBook>('bookSelectedSpy'),
          //   bookselected: { emit: cy.spy().as('bookSelectedSpy') },
        },
      }
    );
    cy.get('button').click();
    cy.get('@bookSelectedSpy').should('have.been.calledWith', book);
  });

  it('should emit book on Button click', () => {
    cy.potato(BookPreviewComponent, {
      imports: [RouterTestingModule],
      providers: [{ provide: BookService, useValue: {} }],
      declarations: [],
      componentProperties: {
        book: book,
      },
    });
    cy.get('button').click();
    cy.get('@bookselectedSpy').should('have.been.calledWith', book);
  });
});
