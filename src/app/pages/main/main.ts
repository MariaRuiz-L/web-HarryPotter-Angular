import 'zone.js';
import {Component, inject} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-main',
  imports: [],
  templateUrl: './main.html',
  styleUrl: './main.scss',
})
export class Main {
  private router = inject(Router);

  navigateToCharacters(): void {
    this.router.navigate(['/characters']);

  }
}
