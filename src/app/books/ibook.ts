export interface IBook {
  id: string;
  title: string;
  subtitle: string;
  isbn: string;
  abstract: string;
  author: string;
  publisher: string;
  price: string;
  numPages: number;
  cover: string;
  userId: number;
}

export const emptyBook = {
  id: '',
  title: '',
  subtitle: '',
  isbn: '',
  abstract: '',
  author: '',
  publisher: '',
  price: '',
  numPages: 0,
  cover: '',
  userId: 0,
};
