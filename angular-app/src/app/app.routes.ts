import { Routes } from '@angular/router';
import { HomePageComponent } from './page/home-page/home-page.component';
import { AuthPageComponent } from './page/auth-page/auth-page.component';

export const routes: Routes = [
  {path: '', component: AuthPageComponent}
];
