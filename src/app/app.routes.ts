import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./features/home/home.component').then(m => m.HomeComponent),
    title: 'Sara & Fernando · 12.12.2026'
  },
  {
    path: 'la-boda',
    loadComponent: () =>
      import('./features/wedding/wedding.component').then(m => m.WeddingComponent),
    title: 'La Boda · Sara & Fernando'
  },
  {
    path: 'transporte',
    loadComponent: () =>
      import('./features/transport/transport.component').then(m => m.TransportComponent),
    title: 'Transporte · Sara & Fernando'
  },
  {
    path: 'nuestro-madrid',
    loadComponent: () =>
      import('./features/madrid/madrid.component').then(m => m.MadridComponent),
    title: 'Nuestro Madrid · Sara & Fernando'
  },
  {
    path: 'regalo',
    loadComponent: () =>
      import('./features/regalo/regalo.component').then(m => m.RegaloComponent),
    title: 'Regalo · Sara & Fernando'
  },
  {
    path: 'confirmacion',
    loadComponent: () =>
      import('./features/confirmacion/confirmacion.component').then(m => m.ConfirmacionComponent),
    title: 'Confirmación de Asistencia · Sara & Fernando'
  },
  {
    path: '**',
    redirectTo: ''
  }
];
