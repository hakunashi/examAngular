import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { Error404Component } from './error404/error404.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: '**', component: Error404Component },
];
