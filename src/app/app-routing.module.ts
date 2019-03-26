import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'material',
    pathMatch: 'full'
  },
  {
    path: 'material',
    loadChildren: './material/material.module#MaterialModule',
  },
  {
    path: 'prime',
    loadChildren: './prime/prime.module#PrimeModule',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
