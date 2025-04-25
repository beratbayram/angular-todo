import { Component, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-about-us',
  imports: [],
  template: `
    <h1>About Us</h1>
    <p>Welcome to the About Us page of our Angular application!</p>
    <p>Here you can find information about our team and mission.</p>
    <p>We are dedicated to providing the best user experience.</p>
    <p>Feel free to explore our website and learn more about us.</p>
    <p>Thank you for visiting!</p>
    <p>Number of ticks: {{ numberOfTicks }}</p>
  `,
  styles: `
  h1 {
    color: blue;
  }
  `,
})
export class AboutUsComponent implements OnDestroy {
  numberOfTicks = 0;
  private intervalId: number;

  constructor() {
    this.intervalId = setInterval(() => {
      this.numberOfTicks++;
    }, 1000);
  }

  ngOnDestroy(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }
}
