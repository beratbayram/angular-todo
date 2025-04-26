import { Component, input, model } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DatePicker } from 'primeng/datepicker';

@Component({
  imports: [DatePicker, ReactiveFormsModule, FormsModule],
  selector: 'app-datepicker',
  template: `
    <div>
      <p-datepicker
        [style]="{ width: '100%' }"
        [showTime]="true"
        [hourFormat]="'24'"
        [showIcon]="true"
        [showButtonBar]="true"
        [inline]="inline()"
        [minDate]="minDate()"
        [(ngModel)]="value"
      />
    </div>
  `,
})
export class DatepickerComponent {

  inline = input(false);
  minDate = input<Date>();

  value = model<Date | null>(null);
}
