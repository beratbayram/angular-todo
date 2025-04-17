import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';

@Component({
  imports: [ButtonModule],
  selector: 'app-button',
  template: ` <p-button (click)="handleClick()">Berat BAYRAM</p-button> `,
  standalone: true,
})
export class ButtonComponent {
  handleClick() {
    console.log('hey');
  }
}
