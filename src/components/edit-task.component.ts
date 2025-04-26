import { CommonModule } from '@angular/common';
import { Component, inject, model } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { AccordionModule } from 'primeng/accordion';
import { ButtonModule } from 'primeng/button';
import { FloatLabel } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';
import { TextareaModule } from 'primeng/textarea';
import { ToggleSwitch } from 'primeng/toggleswitch';
import { Task } from '../utils/Task';
import { AccordionComponent } from './accordion.component';
import { DatepickerComponent } from './datepicker.component';
import { Validators } from '@angular/forms';
import { TasksStorageService } from '../services/TasksStorage.service';

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
    ButtonModule,
    DatepickerComponent,
    ReactiveFormsModule,
  ],
  selector: 'app-edit-task',
  template: `
    <form [formGroup]="form" (ngSubmit)="handleSubmit()">
      <p-floatlabel variant="in">
        <input
          pInputText
          id="title"
          formControlName="title"
          autocomplete="off"
        />
        <label for="title">Title</label>
      </p-floatlabel>
      <p-floatlabel variant="in">
        <textarea
          pTextarea
          id="description"
          name="description"
          formControlName="description"
          rows="5"
        ></textarea>
        <label for="description">Description</label>
      </p-floatlabel>
      <div class="switch">
        <label for="urgent">Is urgent?</label>
        <p-toggleswitch inputId="urgent" formControlName="urgent">
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
        <app-datepicker
          [inline]="true"
          [minDate]="minDate"
          [(value)]="dueDate"
        />
      </app-accordion>
      <p-button
        label="Save"
        type="submit"
        icon="pi pi-check"
        iconPos="right"
        [disabled]="!form.valid"
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

  dueDate = model<Date | null>(null);

  tasksStorage = inject(TasksStorageService);

  minDate = new Date();

  form = new FormGroup({
    title: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required],
    }),
    description: new FormControl('', {
      nonNullable: true,
      validators: [Validators.maxLength(255)],
    }),
    urgent: new FormControl(false, { nonNullable: true }),
  });

  handleSubmit() {
    // WHY ???
    const { title = '', description = '', urgent = false } = this.form.value;

    const newTask: Task = {
      ...this.task(),
      title,
      description,
      urgent,
      id: -1,
      completed: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    const dueDate = this.dueDate();
    if (dueDate) {
      newTask.dueDate = dueDate;
    }

    this.tasksStorage.add(newTask);
    this.form.reset();
    this.dueDate.set(null);
  }
}
