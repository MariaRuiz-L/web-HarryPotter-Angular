import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map, Observable} from 'rxjs';
import {IMovie, IMovieResponse} from './movie.model';


@Injectable({providedIn: 'root'})
export class MovieService{
  private http = inject(HttpClient)
  private apiUrl = 'https://api.potterdb.com/v1/movies'

  getMovies(): Observable<IMovie[]> {
    return this.http.get<IMovieResponse>(this.apiUrl).pipe(
      map(res => res.data)
    );
  }
}
