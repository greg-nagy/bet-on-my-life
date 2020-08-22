import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () =>
      import('@bml/feature-auth').then((m) => m.FeatureAuthModule),
  },
  {
    path: 'bet',
    loadChildren: () =>
      import('@bml/feature-bet').then((m) => m.FeatureBetModule),
  },
  {
    path: 'challenge',
    loadChildren: () =>
      import('@bml/feature-challenge').then((m) => m.FeatureChallengeModule),
  },
  {
    path: 'user',
    loadChildren: () =>
      import('@bml/feature-user').then((m) => m.FeatureUserModule),
  },
  { path: '', redirectTo: '', pathMatch: 'full' },
];

@NgModule({ imports: [RouterModule.forRoot(routes)], exports: [RouterModule] })
export class AppRoutingModule {}
