import { CommonModule } from '@angular/common';
import { Component, model } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AccordionModule } from 'primeng/accordion';
import { Button, ButtonModule } from 'primeng/button';
import { FloatLabel } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';
import { TextareaModule } from 'primeng/textarea';
import { ToggleSwitch } from 'primeng/toggleswitch';
import { Task } from '../utils/Task';
import { AccordionComponent } from './accordion.component';
import { DatepickerComponent } from './datepicker.component';

/**
  id: number;
  title: string;
  description: string;
  completed: boolean;
  createdAt: Date;
  updatedAt: Date;
  dueDate: Date;
  urgent: boolean;
 */

@Component({
  imports: [
    CommonModule,
    FormsModule,
    InputTextModule,
    FloatLabel,
    TextareaModule,
    ToggleSwitch,
    AccordionModule,
    AccordionComponent,
    Button,
    ButtonModule,
    DatepickerComponent,
  ],
  selector: 'app-edit-task',
  template: `
    <form>
      <p-floatlabel variant="in">
        <input pInputText id="title" name="title" autocomplete="off" />
        <label for="title">Title</label>
      </p-floatlabel>
      <p-floatlabel variant="in">
        <textarea
          pTextarea
          id="description"
          name="description"
          rows="5"
        ></textarea>
        <label for="description">Description</label>
      </p-floatlabel>
      <div class="switch">
        <label for="urgent">Is urgent?</label>
        <p-toggleswitch inputId="urgent">
          <ng-template #handle let-checked="checked">
            <span
              [ngClass]="{
              pi: true,
              'pi-flag-fill': true,
              checked,
            }"
            ></span>
          </ng-template>
        </p-toggleswitch>
      </div>
      <app-accordion header="Due Date?">
        <app-datepicker [inline]="true" />
      </app-accordion>
      <p-button
        label="Save"
        type="submit"
        icon="pi pi-check"
        iconPos="right"
        [style]="{ width: '100%' }"
      />
    </form>
  `,
  styles: `
  input, textarea,p-datepicker {
    width: 100%;
    resize: none;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .pi {
    font-size: 0.5rem;

    &.checked {
      color: red;
    }
  }

  .switch {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
  }
  `,
})
export class EditTaskComponent {
  task = model<Task>();
}
