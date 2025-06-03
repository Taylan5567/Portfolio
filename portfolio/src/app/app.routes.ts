import { Routes, RouterModule } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'imprint',
    loadComponent: () =>
      import('./imprint/imprint.component').then((m) => m.ImprintComponent),
  },
  {
    path: 'private-policy',
    loadComponent: () =>
      import('./policy/policy.component').then((m) => m.PolicyComponent),
  },
  { path: '**', redirectTo: '' },
];
