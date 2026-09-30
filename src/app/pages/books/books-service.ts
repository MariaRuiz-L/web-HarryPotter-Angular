import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { inject, Injectable } from '@angular/core';
import { IBookResponse} from './books.model';

@Injectable({ providedIn: 'root' })
export class BooksService {
  private url = 'https://api.potterdb.com/v1/books';
  private http = inject(HttpClient);

  getBooks(): Observable<IBookResponse> {
    return this.http.get<IBookResponse>(this.url);
  }
}
