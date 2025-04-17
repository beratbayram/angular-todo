import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-base',
  template: `
    <div class="bg">
      <div class="container">
        <ng-content></ng-content>
      </div>
    </div>
  `,
  styles: `
  .bg {
    background-color: #f0f0f0;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .container {
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    width: clamp(350px, 80vw, 600px);
    display: flex;
    flex-direction: column;
    padding: 20px;
  }
  `,
})
export class BaseComponent {}
