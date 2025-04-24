import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-header',
  template: ` <h1><ng-content /></h1> `,
  styles: `
  h1 {
    text-align: center;
    margin-bottom: 20px;
  }
  `,
})
export class HeaderComponent {}
