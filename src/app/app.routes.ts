import { Routes } from '@angular/router';
import {Main} from './pages/main/main';
import {Characters} from './pages/characters/modal/characters';
import {Potions} from './pages/potions/potions';
import {Movies} from './pages/movies/movies';
import {Spells} from './pages/spells/spells';
import {Books} from './pages/books/books';


export const routes: Routes = [
  {
    path: '',
    redirectTo: 'main',
    pathMatch: 'full'
  },
  {
    path: 'main',
    component: Main
  },
  {
    path: 'books',
    component: Books
  },
  {
    path: 'characters',
    component: Characters
  },
  {
    path: 'movies',
    component: Movies
  },
  {
    path: 'potions',
    component: Potions
  },
  {
    path: 'spells',
    component: Spells
  }
];
