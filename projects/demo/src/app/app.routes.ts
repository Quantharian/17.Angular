import { Routes } from '@angular/router';
// import { HomeComponent } from './home/home.component';
// import { FilmsComponent } from './films/films.component';
// import { AboutComponent } from './about/about.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  {
    path: 'home',
    loadComponent: () => import('./home/home.component'),
    title: 'Home | Angular Demo',
    data: { label: 'Home' },
  },
  {
    path: 'films',
    loadComponent: () => import('./films/films.component'),
    title: 'Films | Angular Demo',
    data: { label: 'Films' },
  },
  {
    path: 'about',
    loadComponent: () => import('./about/about.component'),
    title: 'About | Angular Demo',
    data: { label: 'About' },
  },
  { path: '**', redirectTo: 'home' },
];
