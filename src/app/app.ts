import { Component, inject } from '@angular/core';
import { Router,RouterOutlet } from '@angular/router';
import {Navbar} from './components/navbar/navbar';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
 showNavbar: boolean = true;
  router = inject(Router);
 /*
  constructor() {
    this.router.events.subscribe(() => {  //llamamos a la variable router(como es global usamos this), Nos suscribimos al observable 'events' del Router para escuchar cada cambio de navegación
      this.showNavbar = this.router.url !== '/' && this.router.url !== '/main';//cuando se cumplan estas dos condiciones mostará el navbar(showNabvar = true)si es false no se mostrará
    })
  }*/
}
