import { Component, input } from '@angular/core';
import { DatePicker } from 'primeng/datepicker';

@Component({
  imports: [DatePicker],
  selector: 'app-datepicker',
  template: `
    <p-datepicker
      [style]="{ width: '100%' }"
      [showTime]="true"
      [hourFormat]="'24'"
      [showIcon]="true"
      [showButtonBar]="true"
      [inline]="inline()"
      [minDate]="minDate"
    />
  `,
})
export class DatepickerComponent {
  inline = input(false);

  minDate = new Date();
}
