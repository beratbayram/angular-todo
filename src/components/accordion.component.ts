import { Component, input } from '@angular/core';
import { AccordionModule } from 'primeng/accordion';

@Component({
  imports: [AccordionModule],
  selector: 'app-accordion',
  template: `
    <p-accordion [multiple]="true">
      <p-accordion-panel [value]="0">
        <p-accordion-header>
          <ng-template #toggleicon let-active="active">
            @if (active) {
            <span class="pi pi-angle-up"></span>
            } @else {
            <span class="pi pi-angle-down"></span>
            }
          </ng-template>
          {{ header() }}
        </p-accordion-header>
        <p-accordion-content>
          <ng-content />
        </p-accordion-content>
      </p-accordion-panel>
    </p-accordion>
  `
})
export class AccordionComponent {
  header = input.required();
  open = input(false);
}
