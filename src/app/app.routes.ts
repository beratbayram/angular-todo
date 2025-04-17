import { Routes } from '@angular/router';
import { AboutUsComponent } from '../routes/about-us.component';
import { HomeComponent } from '../routes/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about-us', component: AboutUsComponent },
];
