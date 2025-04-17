import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonComponent } from "../components/app-button.component";

@Component({
  selector: 'app-home',
  imports: [RouterModule, ButtonComponent],
  template: `
    <h1>Angular Todo App</h1>
    <p>Welcome to the Angular Todo App!</p>

    <app-button></app-button>
  `,
  styles: `
  `,
})
export class HomeComponent {}
