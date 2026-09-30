import {Component, inject, OnInit} from '@angular/core';
import { MovieService} from './movie.service';
import { IMovie} from './movie.model';
import {DialogService, DynamicDialogRef} from 'primeng/dynamicdialog';
import { MovieDetail } from './movie-detail/movie-detail';
import { ButtonModule} from 'primeng/button';


@Component({
  selector: 'app-movies',
  standalone: true,
  imports: [ButtonModule],
  providers: [DialogService],
  templateUrl: './movies.html',
  styleUrl: './movies.scss',
})
export class Movies implements OnInit {
  movies: IMovie[] = [];
  private movieService = inject(MovieService);
  private dialogService = inject(DialogService);

  ref: DynamicDialogRef | null | undefined;


  ngOnInit() {
    this.movieService.getMovies().subscribe(data => this.movies = data);
  }

  showDetails(movie: IMovie) {
    this.ref = this.dialogService.open(MovieDetail, {
      header: movie.attributes.title, //requisito, titulo como header
      width: '60%',
      closable: true,
      data: {movie},
      contentStyle: { overflow: 'auto'},
      baseZIndex: 100000
    });
  }

}




