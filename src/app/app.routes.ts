import { Routes } from '@angular/router';
import { AboutUsComponent } from '../components/about-us.component';
import { HomeComponent } from '../components/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about-us', component: AboutUsComponent },
];
