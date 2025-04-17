import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonComponent } from '../components/button.component';
import { BaseComponent } from '../components/base.component';

@Component({
  selector: 'app-home',
  imports: [RouterModule, ButtonComponent, BaseComponent],
  template: `
    <app-base>
      <h1>Angular Todo App</h1>
      <p>Welcome to the Angular Todo App!</p>

      <app-button></app-button>
    </app-base>
  `,
  styles: `
  `,
})
export class HomeComponent {}
