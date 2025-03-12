import { Routes } from '@angular/router';
// import { HomeComponent } from './home/home.component';
// import { FilmsComponent } from './films/films.component';
// import { AboutComponent } from './about/about.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  {
    path: 'home',
    loadComponent: () => import('./home/home.component'), //.then((m) => m.HomeComponent),
  },
  { path: 'films', loadComponent: () => import('./films/films.component') },
  { path: 'about', loadComponent: () => import('./about/about.component') },
  { path: '**', redirectTo: 'home' },
];
