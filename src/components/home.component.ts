import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterModule],
  template: `
    <h1>Angular Todo App</h1>
    <p>Welcome to the Angular Todo App!</p>

    <router-outlet />
  `,
  styles: `
  `,
})
export class HomeComponent {}
