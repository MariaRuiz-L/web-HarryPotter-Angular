import { Component, inject } from '@angular/core';
import {Router} from '@angular/router';


@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})

export class Navbar {
  private router = inject(Router);

  isPageActive(route:String): boolean {
    return this.router.url === route;
  }

  navigateTo(url: string){
    this.router.navigate([url]);
  }
}
