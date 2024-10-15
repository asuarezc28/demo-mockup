import { Routes } from '@angular/router';
import { HomeViewComponent } from './pages/home-view/home-view.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeViewComponent },
];
