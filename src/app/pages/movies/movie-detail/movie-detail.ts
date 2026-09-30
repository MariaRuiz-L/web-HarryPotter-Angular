import { Component, inject, OnInit } from '@angular/core';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';



@Component({
  selector: 'app-movie-detail',
  standalone: true,
  templateUrl: './movie-detail.html',
  styleUrl: './movie-detail.scss'
})
export class MovieDetail implements OnInit {
  // Inyectamos DynamicDialogConfig para acceder a los datos pasados al abrir el modal
  private config = inject(DynamicDialogConfig);
  private ref = inject(DynamicDialogRef);

  // Variable para almacenar la información de la película
  movie: any;

  ngOnInit() {
    this.movie = this.config.data.movie;
  }

  //metodo para cerrar el modal manualmente
  close() {
    this.ref.close();
  }
}
