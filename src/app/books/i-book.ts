import { FormControl } from '@angular/forms';

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
export type IForm<T> = {
  [K in keyof T]: FormControl<T[K]>;
};
